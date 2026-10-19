// ============================================================================
//  Relance de fin d'essai (job planifié)
//  Supabase Edge Function (Deno).
//
//  Repère les essais (order_id='essai') qui viennent d'expirer et envoie une
//  relance Brevo, une seule fois par essai (colonne reminder_sent).
//
//  Déploiement :
//    supabase functions deploy trial-reminder --no-verify-jwt
//  Secrets :
//    supabase secrets set CRON_SECRET=<une_chaine_aleatoire>
//    supabase secrets set BREVO_REMINDER_TEMPLATE_ID=<id du template relance>
//  (BREVO_API_KEY est déjà posé ; SUPABASE_URL et SERVICE_ROLE_KEY sont auto.)
//
//  Appel (depuis le cron Supabase) avec l'en-tête :  x-cron-secret: <CRON_SECRET>
// ============================================================================

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SERVICE_ROLE = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;

const NAMES: Record<string, string> = {
  'speed-rf': 'Speed RF',
  'rf-shot': 'RF Shot',
  'reperages': 'Repérages',
};

// On relance les essais expirés dans les N derniers jours (évite de spammer
// de vieux essais si le job a été interrompu plusieurs jours).
const WINDOW_DAYS = 5;

Deno.serve(async (req) => {
  // Protection : seul le cron (qui connaît le secret) peut déclencher l'envoi.
  const secret = Deno.env.get('CRON_SECRET');
  if (!secret || req.headers.get('x-cron-secret') !== secret) {
    return new Response('unauthorized', { status: 401 });
  }

  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE);

  const nowIso = new Date().toISOString();
  const floorIso = new Date(Date.now() - WINDOW_DAYS * 86_400_000).toISOString();

  // Essais expirés récemment, pas encore relancés.
  const { data: rows, error } = await supabase
    .from('licenses')
    .select('id, user_id, product, expires_at')
    .eq('order_id', 'essai')
    .eq('reminder_sent', false)
    .lte('expires_at', nowIso)
    .gte('expires_at', floorIso);

  if (error) {
    console.error('lecture licences:', error.message);
    return new Response('db error', { status: 500 });
  }
  if (!rows || rows.length === 0) {
    return new Response('rien a relancer', { status: 200 });
  }

  // Regrouper par utilisateur (une seule relance même si 2 produits en essai).
  const byUser = new Map<string, { id: string; product: string }[]>();
  for (const r of rows as { id: string; user_id: string; product: string }[]) {
    const arr = byUser.get(r.user_id) ?? [];
    arr.push({ id: r.id, product: r.product });
    byUser.set(r.user_id, arr);
  }

  // Emails des comptes concernés.
  const { data: usersData } = await supabase.auth.admin.listUsers({ perPage: 1000 });
  const emailById = new Map((usersData?.users ?? []).map((u) => [u.id, u.email]));

  const brevoKey = Deno.env.get('BREVO_API_KEY');
  const template = Number(Deno.env.get('BREVO_REMINDER_TEMPLATE_ID') ?? '0');

  const idsToMark: string[] = [];
  let sent = 0;

  for (const [userId, list] of byUser) {
    const email = emailById.get(userId);
    const produits = [...new Set(list.map((l) => NAMES[l.product] ?? l.product))].join(' et ');

    if (brevoKey && template && email) {
      try {
        await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: { 'api-key': brevoKey, 'content-type': 'application/json' },
          body: JSON.stringify({ to: [{ email }], templateId: template, params: { produits } }),
        });
        sent++;
      } catch (e) {
        console.error('erreur envoi Brevo (relance):', e);
      }
    }
    // On marque comme relancé dans tous les cas : pas de spam en cas de re-run.
    list.forEach((l) => idsToMark.push(l.id));
  }

  if (idsToMark.length) {
    const { error: upErr } = await supabase
      .from('licenses')
      .update({ reminder_sent: true })
      .in('id', idsToMark);
    if (upErr) console.error('marquage reminder_sent:', upErr.message);
  }

  return new Response(`relances envoyees: ${sent} / comptes: ${byUser.size}`, { status: 200 });
});
