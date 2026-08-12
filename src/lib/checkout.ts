// Configuration Lemon Squeezy (checkout côté site).
//
// 👉 Pour ACTIVER les boutons « Acheter », renseigne le sous-domaine de ta
//    boutique Lemon Squeezy ci-dessous (ex. 'arnisound' pour
//    arnisound.lemonsqueezy.com). Tant que c'est vide, les boutons renvoient
//    vers /login (comportement actuel) — pratique tant que la boutique n'est
//    pas encore activée (SIRET / compte de versement).
export const LEMONSQUEEZY_STORE = ''; // ex: 'arnisound'

export const checkoutLive = LEMONSQUEEZY_STORE.length > 0;

/**
 * Construit l'URL de checkout Lemon Squeezy pour un variant donné.
 * L'email et le user_id (facultatifs) pré-remplissent le paiement et
 * permettent au webhook de rattacher la licence au bon compte.
 */
export function checkoutUrl(
  variantId: string,
  opts: { email?: string; userId?: string } = {},
): string {
  const base = `https://${LEMONSQUEEZY_STORE}.lemonsqueezy.com/checkout/buy/${variantId}`;
  const params = new URLSearchParams();
  if (opts.email) params.set('checkout[email]', opts.email);
  if (opts.userId) params.set('checkout[custom][user_id]', opts.userId);
  const q = params.toString();
  return q ? `${base}?${q}` : base;
}
