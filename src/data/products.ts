export interface Product {
  slug: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  free: boolean;
  audience: string;
  summary: string;
  features: string[];
  differentiator: string;
}

export const products: Product[] = [
  {
    slug: 'speed-rf',
    name: 'Speed RF',
    tagline: 'Coordination HF rapide, sur mobile, sans scan matériel.',
    price: '9,99 €',
    priceNote: 'Licence perpétuelle · paiement unique',
    free: false,
    audience: 'Musiciens, régisseurs, non-techniciens RF',
    summary:
      "Trouvez des fréquences HF compatibles en quelques secondes depuis votre téléphone. Pensé pour ceux qui veulent que ça marche, sans plonger dans un logiciel d'ingénieur.",
    features: [
      'Contexte ARCOM / TNT français intégré',
      'Mobile-first, aucune installation',
      'Calcul de fréquences compatibles instantané',
      'Interface en français, claire et directe',
    ],
    differentiator:
      'Aucun concurrent sur ce segment : WWB est trop complexe pour cette cible.',
  },
  {
    slug: 'rf-shot',
    name: 'RF Shot',
    tagline: 'Coordination HF avancée pour le terrain : IM3/IM5, multi-bandes.',
    price: '24,99 €',
    priceNote: 'Licence perpétuelle · paiement unique',
    free: false,
    audience: 'Ingénieurs RF, prestataires son, 5 à 20 micros',
    summary:
      "La coordination hybride avancée sans la lourdeur d'un logiciel desktop. Calcul des intermodulations, gestion multi-bandes, le tout dans le navigateur, en français.",
    features: [
      'Calcul des intermodulations IM3 / IM5',
      'Gestion multi-bandes',
      'Coordination hybride avancée',
      'Web, en français, sans installation',
    ],
    differentiator:
      'Entre Speed RF (trop simple) et WWB / EazyRF (trop lourds). IAS coûte 250–550 $.',
  },
  {
    slug: 'fiche-tech',
    name: 'Fiche Tech Creator',
    tagline: 'Générez des fiches techniques propres et structurées.',
    price: 'Gratuit',
    priceNote: 'Compte gratuit · sans carte bancaire',
    free: true,
    audience: 'Tous niveaux, amateurs inclus',
    summary:
      "Créez des fiches techniques claires et exportables en PDF, sans Word ni mise en page laborieuse. La porte d'entrée de l'écosystème Arnisound.",
    features: [
      'Fiches structurées son / lumière / plateau',
      'Export PDF propre',
      'Sauvegarde dans votre compte',
      '100 % gratuit, juste un compte',
    ],
    differentiator:
      "Votre point de départ : créez un compte gratuit et découvrez l'écosystème.",
  },
];

export const bundle = {
  name: 'Bundle Speed RF + RF Shot',
  price: '29,99 €',
  was: '34,98 €',
  note: 'Les deux outils RF, un seul achat.',
};

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
