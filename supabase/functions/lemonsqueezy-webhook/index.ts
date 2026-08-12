// ============================================================================
//  Webhook Lemon Squeezy → création automatique des licences
//  Supabase Edge Function (Deno).
//
//  Déploiement :
//    supabase functions deploy lemonsqueezy-webhook --no-verify-jwt
//    supabase secrets set LEMONSQUEEZY_WEBHOOK_SECRET=<ton-secret>
//  (SUPABASE_URL et SUPABASE_SERVICE_ROLE_KEY sont fournis automatiquement.)
//
//  URL à enregistrer dans Lemon Squeezy → Settings → Webhooks :
//    https://<ref>.functions.supabase.co/lemonsqueezy-webhook
//  Événement à cocher : order_created
// ============================================================================

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SECRET = Deno.env.get('LEMONSQUEEZY_WEBHOOK_SECRET')!;
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SERVICE_ROLE = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

// Mapping Variant ID Lemon Squeezy → slug(s) de produit.
// Un variant peut débloquer PLUSIEURS produits (bundle).
const VARIANT_TO_PRODUCTS: Record<string, string[]> = {
  '2009773': ['speed-rf'],
  '2009790': ['rf-shot'],
  '2009850': ['speed-rf', 'rf-shot'], // Bundle Speed RF + RF Shot
  // '<variant Repérages>': ['reperages'],  // à ajouter quand l'app sera en ligne
};

// Vérifie la signature HMAC-SHA256 envoyée dans l'en-tête X-Signature.
async function isValidSignature(raw: string, signature: string): Promise<boolean> {
  if (!signature) return false;
  const key = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(SECRET),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign'],
  );
  const mac = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(raw));
  const expected = [...new Uint8Array(mac)].map((b) => b.toString(16).padStart(2, '0')).join('');
  // comparaison en temps constant
  if (expected.length !== signature.length) return false;
  let diff = 0;
  for (let i = 0; i < expected.length; i++) diff |= expected.charCodeAt(i) ^ signature.charCodeAt(i);
  return diff === 0;
}

Deno.serve(async (req) => {
  const raw = await req.text();
  const signature = req.headers.get('X-Signature') ?? '';

  if (!(await isValidSignature(raw, signature))) {
    return new Response('invalid signature', { status: 401 });
  }

  const event = JSON.parse(raw);
  if (event?.meta?.event_name !== 'order_created') {
    return new Response('ignored', { status: 200 }); // on ne traite que les commandes créées
  }

  const attributes = event?.data?.attributes ?? {};
  const variantId = String(attributes?.first_order_item?.variant_id ?? '');
  const productsToGrant = VARIANT_TO_PRODUCTS[variantId];
  if (!productsToGrant) {
    console.log('variant inconnu:', variantId);
    return new Response('unknown variant', { status: 200 });
  }

  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE);

  // On relie l'achat au compte : d'abord via le user_id passé au checkout,
  // sinon via l'email de la commande (filet de sécurité).
  let userId: string | undefined = event?.meta?.custom_data?.user_id;
  const email: string | undefined = attributes?.user_email;

  if (!userId && email) {
    const { data } = await supabase.auth.admin.listUsers();
    userId = data.users.find((u) => u.email?.toLowerCase() === email.toLowerCase())?.id;
  }
  if (!userId) {
    console.log('compte introuvable pour', email);
    return new Response('user not found', { status: 200 });
  }

  const orderId = String(event?.data?.id ?? '');
  const rows = productsToGrant.map((product) => ({
    user_id: userId,
    product,
    active: true,
    order_id: orderId,
  }));

  const { error } = await supabase
    .from('licenses')
    .upsert(rows, { onConflict: 'user_id,product' });

  if (error) {
    console.error('erreur insertion licence:', error.message);
    return new Response('db error', { status: 500 }); // 500 → Lemon Squeezy réessaiera
  }

  return new Response('ok', { status: 200 });
});
