// ============================================================================
//  Webhook Stripe → création automatique des licences
//  Supabase Edge Function (Deno).
//
//  Déploiement :
//    supabase functions deploy stripe-webhook --no-verify-jwt
//    supabase secrets set STRIPE_WEBHOOK_SECRET=whsec_xxx
//    supabase secrets set STRIPE_SECRET_KEY=sk_live_xxx   (ou sk_test_xxx en test)
//  (SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY sont fournis automatiquement.)
//
//  URL à enregistrer dans Stripe → Developers → Webhooks :
//    https://<ref>.functions.supabase.co/stripe-webhook
//  Événement à cocher : checkout.session.completed
// ============================================================================

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const WEBHOOK_SECRET = Deno.env.get('STRIPE_WEBHOOK_SECRET')!;
const STRIPE_SECRET = Deno.env.get('STRIPE_SECRET_KEY')!;
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SERVICE_ROLE = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

// Price ID Stripe → slug(s) de produit. Un prix peut débloquer PLUSIEURS
// produits (bundle). `days` (facultatif) = licence d'essai temporaire.
// ⚠️ À COMPLÉTER avec tes vrais Price IDs (price_...).
const PRICE_MAP: Record<string, { products: string[]; days?: number }> = {
  // 'price_SPEEDRF': { products: ['speed-rf'] },
  // 'price_RFSHOT':  { products: ['rf-shot'] },
  // 'price_BUNDLE':  { products: ['speed-rf', 'rf-shot'] },
  // 'price_TRIAL':   { products: ['speed-rf', 'rf-shot'], days: 15 },
  // 'price_REPERAGES': { products: ['reperages'] },
};

// Vérifie la signature Stripe (en-tête Stripe-Signature : t=...,v1=...).
async function isValidSignature(raw: string, header: string): Promise<boolean> {
  if (!header) return false;
  const parts: Record<string, string> = {};
  for (const kv of header.split(',')) {
    const [k, v] = kv.split('=');
    if (k && v) parts[k.trim()] = v.trim();
  }
  const t = parts['t'];
  const v1 = parts['v1'];
  if (!t || !v1) return false;

  // Anti-rejeu : on refuse une signature datant de plus de 5 minutes.
  const age = Math.abs(Date.now() / 1000 - Number(t));
  if (!Number.isFinite(age) || age > 300) return false;

  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(WEBHOOK_SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const mac = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`${t}.${raw}`));
  const expected = [...new Uint8Array(mac)].map((b) => b.toString(16).padStart(2, '0')).join('');
  if (expected.length !== v1.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ v1.charCodeAt(i);
  return diff === 0;
}

Deno.serve(async (req) => {
  const raw = await req.text();
  const signature = req.headers.get('Stripe-Signature') ?? '';

  if (!(await isValidSignature(raw, signature))) {
    return new Response('invalid signature', { status: 401 });
  }

  const event = JSON.parse(raw);
  if (event?.type !== 'checkout.session.completed') {
    return new Response('ignored', { status: 200 });
  }

  const session = event?.data?.object ?? {};
  // Paiement unique réglé (ou essai à 0 € via coupon 100 %).
  if (session.payment_status !== 'paid' && session.amount_total !== 0) {
    return new Response('not paid', { status: 200 });
  }

  // Récupère les lignes de la session pour connaître les Price IDs achetés.
  const liResp = await fetch(
    `https://api.stripe.com/v1/checkout/sessions/${session.id}/line_items?limit=100`,
    { headers: { Authorization: `Bearer ${STRIPE_SECRET}` } },
  );
  const li = await liResp.json();
  const priceIds: string[] = (li?.data ?? [])
    .map((item: any) => item?.price?.id)
    .filter(Boolean);

  const productsToGrant = new Set<string>();
  let days: number | undefined;
  for (const pid of priceIds) {
    const entry = PRICE_MAP[pid];
    if (entry) {
      entry.products.forEach((p) => productsToGrant.add(p));
      if (entry.days) days = entry.days;
    }
  }
  if (productsToGrant.size === 0) {
    console.log('prix inconnu(s):', priceIds.join(', '));
    return new Response('unknown price', { status: 200 });
  }

  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE);

  // Rattachement au compte : client_reference_id (user_id) sinon email.
  let userId: string | undefined = session.client_reference_id || undefined;
  const email: string | undefined =
    session?.customer_details?.email || session?.customer_email || undefined;

  if (!userId && email) {
    const { data } = await supabase.auth.admin.listUsers();
    userId = data.users.find((u) => u.email?.toLowerCase() === email.toLowerCase())?.id;
  }
  if (!userId) {
    console.log('compte introuvable pour', email);
    return new Response('user not found', { status: 200 });
  }

  const expiresAt = days ? new Date(Date.now() + days * 86_400_000).toISOString() : null;

  // Essai : ne pas rétrograder une licence déjà permanente.
  let list = [...productsToGrant];
  if (days) {
    const { data: existing } = await supabase
      .from('licenses')
      .select('product, expires_at, active')
      .eq('user_id', userId)
      .in('product', list);
    const permanent = new Set(
      (existing ?? []).filter((l) => l.active && l.expires_at === null).map((l) => l.product),
    );
    list = list.filter((p) => !permanent.has(p));
    if (list.length === 0) return new Response('already owned', { status: 200 });
  }

  const rows = list.map((product) => ({
    user_id: userId,
    product,
    active: true,
    order_id: String(session.id ?? ''),
    expires_at: expiresAt,
  }));

  const { error } = await supabase
    .from('licenses')
    .upsert(rows, { onConflict: 'user_id,product' });

  if (error) {
    console.error('erreur insertion licence:', error.message);
    return new Response('db error', { status: 500 }); // 500 → Stripe réessaiera
  }

  return new Response('ok', { status: 200 });
});
