// ============================================================================
//  Activation de l'essai 15 jours + email Brevo
//  Supabase Edge Function (Deno).
//
//  Appelée depuis le site : supabase.functions.invoke('start-trial')
//  (le JWT de l'utilisateur connecté est transmis automatiquement).
//
//  Déploiement :
//    supabase functions deploy start-trial
//  Secrets (facultatifs, pour l'email) :
//    supabase secrets set BREVO_API_KEY=xkeysib-xxx          (déjà posé pour l'achat)
//    supabase secrets set BREVO_TRIAL_TEMPLATE_ID=<id du template essai>
//  (SUPABASE_URL et SUPABASE_ANON_KEY sont fournis automatiquement.)
//
//  La garde « 1 seul essai par compte » vit dans la fonction SQL start_trial().
// ============================================================================

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const ANON_KEY = Deno.env.get('SUPABASE_ANON_KEY')!;

const NAMES: Record<string, string> = {
  'speed-rf': 'Speed RF',
  'rf-shot': 'RF Shot',
  'reperages': 'Repérages',
};

const cors = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

function json(body: unknown, code = 200) {
  return new Response(JSON.stringify(body), {
    status: code,
    headers: { ...cors, 'content-type': 'application/json' },
  });
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: cors });

  // Client « au nom de l'utilisateur » : on relaie son JWT.
  const authHeader = req.headers.get('Authorization') ?? '';
  const supabase = createClient(SUPABASE_URL, ANON_KEY, {
    global: { headers: { Authorization: authHeader } },
  });

  const { data: userData } = await supabase.auth.getUser();
  const user = userData?.user;
  if (!user) return json({ status: 'non_connecte' }, 401);

  // Activation (la fonction SQL applique la garde « 1 essai par compte »).
  const { data: status, error } = await supabase.rpc('start_trial');
  if (error) {
    console.error('start_trial RPC:', error.message);
    return json({ status: 'erreur' }, 500);
  }

  // Email Brevo seulement quand l'essai vient d'être ouvert.
  if (status === 'ok') {
    const brevoKey = Deno.env.get('BREVO_API_KEY');
    const template = Number(Deno.env.get('BREVO_TRIAL_TEMPLATE_ID') ?? '0');
    const email = user.email;
    if (brevoKey && template && email) {
      // Produits réellement en essai (RLS : l'utilisateur ne lit que ses licences).
      const { data: lics } = await supabase
        .from('licenses')
        .select('product, expires_at')
        .eq('order_id', 'essai')
        .eq('active', true);
      const now = Date.now();
      const actifs = (lics ?? []).filter(
        (l: { expires_at: string | null }) =>
          l.expires_at && new Date(l.expires_at).getTime() > now,
      );
      const produits =
        actifs.map((l: { product: string }) => NAMES[l.product] ?? l.product).join(' et ')
        || 'tes outils';
      const maxTs = actifs.reduce(
        (m: number, l: { expires_at: string | null }) =>
          Math.max(m, new Date(l.expires_at as string).getTime()),
        0,
      );
      const fin = maxTs > 0 ? new Date(maxTs).toLocaleDateString('fr-FR') : '';

      try {
        await fetch('https://api.brevo.com/v3/smtp/email', {
          method: 'POST',
          headers: { 'api-key': brevoKey, 'content-type': 'application/json' },
          body: JSON.stringify({
            to: [{ email }],
            templateId: template,
            params: { produits, fin },
          }),
        });
      } catch (e) {
        console.error('erreur envoi Brevo (essai):', e); // non bloquant
      }
    }
  }

  return json({ status });
});
