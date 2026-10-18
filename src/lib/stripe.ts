// Configuration Stripe (checkout côté site), en parallèle de Lemon Squeezy.
//
// Renseigne un Payment Link par produit (https://buy.stripe.com/...).
// Tant que la map est vide, Stripe est inactif et le site reste sur
// Lemon Squeezy (voir src/lib/checkout.ts).
export const STRIPE_LINKS: Record<string, string> = {
  'speed-rf': 'https://buy.stripe.com/9B67sLg3p1Y8epde2g2Nq00',
  'rf-shot': 'https://buy.stripe.com/4gMdR94kHeKU4ODe2g2Nq01',
  'bundle': 'https://buy.stripe.com/dRmdR97wT0U41Cr2jy2Nq02',
  // 'reperages':'https://buy.stripe.com/...',
};

// Fournisseur de paiement actif : 'lemonsqueezy' (actuel) ou 'stripe'.
// On bascule ici quand les Payment Links sont prêts et testés.
export const PAYMENT_PROVIDER: 'lemonsqueezy' | 'stripe' = 'stripe';

export const stripeLive =
  PAYMENT_PROVIDER === 'stripe' && Object.keys(STRIPE_LINKS).length > 0;

/**
 * Construit l'URL de paiement Stripe pour un produit.
 * prefilled_email pré-remplit l'email ; client_reference_id transporte le
 * user_id Supabase pour que le webhook rattache la licence au bon compte.
 */
export function stripeCheckoutUrl(
  link: string,
  opts: { email?: string; userId?: string } = {},
): string {
  const u = new URL(link);
  if (opts.email) u.searchParams.set('prefilled_email', opts.email);
  if (opts.userId) u.searchParams.set('client_reference_id', opts.userId);
  return u.toString();
}
