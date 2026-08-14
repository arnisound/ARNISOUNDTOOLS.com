// Configuration Lemon Squeezy (checkout côté site).
//
// Hôte du checkout Lemon Squeezy :
//   - domaine perso : 'store.arnisoundtools.com'
//   - ou sous-domaine par défaut : 'arnisound.lemonsqueezy.com'
// Vide ('') → les boutons « Acheter » renvoient vers /login (checkout inactif).
export const LEMONSQUEEZY_CHECKOUT_HOST = 'store.arnisoundtools.com';

export const checkoutLive = LEMONSQUEEZY_CHECKOUT_HOST.length > 0;

/**
 * Construit l'URL de checkout Lemon Squeezy pour un variant donné.
 * L'email et le user_id (facultatifs) pré-remplissent le paiement et
 * permettent au webhook de rattacher la licence au bon compte.
 */
export function checkoutUrl(
  variantId: string,
  opts: { email?: string; userId?: string } = {},
): string {
  const base = `https://${LEMONSQUEEZY_CHECKOUT_HOST}/checkout/buy/${variantId}`;
  const params = new URLSearchParams();
  if (opts.email) params.set('checkout[email]', opts.email);
  if (opts.userId) params.set('checkout[custom][user_id]', opts.userId);
  const q = params.toString();
  return q ? `${base}?${q}` : base;
}
