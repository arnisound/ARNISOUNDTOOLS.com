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
  /** Badge/logo produit (chemin public), optionnel. */
  image?: string;
  /** Cartes « avantages » orientées bénéfice client (optionnel). */
  benefits?: { title: string; text: string }[];
  /** Étapes « aussi simple que ça » (optionnel). */
  steps?: string[];
}

export const products: Product[] = [
  {
    slug: 'speed-rf',
    name: 'Speed RF',
    tagline:
      'Des micros sans fil qui marchent du premier coup — en 30 secondes, depuis votre téléphone.',
    price: '9,99 €',
    priceNote: 'Payé une seule fois · à vous pour toujours',
    free: false,
    audience: 'Micros HF · Oreillettes · Sans prise de tête',
    image: '/products/speed-rf.svg',
    summary:
      "Un micro qui grésille, se coupe ou siffle en plein évènement ? 9 fois sur 10, c'est une question de fréquences mal choisies. Speed RF vous donne des fréquences propres et compatibles en quelques secondes : vous indiquez votre matériel et votre ville, l'appli s'occupe du reste. Aucun logiciel à installer, aucune compétence technique requise.",
    benefits: [
      {
        title: 'Fini les coupures et le larsen',
        text: 'Des fréquences sans interférence, calculées pour ne pas se gêner entre elles. Vos micros restent nets du début à la fin.',
      },
      {
        title: 'Prêt en 30 secondes',
        text: 'Pas de scan, pas de manuel de 200 pages. Trois infos à renseigner et vous avez vos fréquences.',
      },
      {
        title: 'Pensé pour la France',
        text: 'Évite automatiquement les chaînes TV (TNT) qui brouillent vos micros, selon votre région.',
      },
      {
        title: 'Rien à installer',
        text: 'Ça tourne directement dans le navigateur de votre téléphone ou de votre ordi. Aucune appli à télécharger.',
      },
      {
        title: 'En français, sans jargon',
        text: "Chaque étape est expliquée simplement. Pas besoin d'être ingénieur du son pour s'en servir.",
      },
      {
        title: 'Payé une fois, pour toujours',
        text: '9,99 € une seule fois. Pas d’abonnement, pas de frais cachés, pas de mauvaise surprise.',
      },
    ],
    steps: [
      'Choisissez votre matériel (marque et modèle de vos micros).',
      'Indiquez votre ville ou votre région.',
      'Recevez des fréquences prêtes à régler, compatibles entre elles.',
    ],
    features: [
      'Calcul de fréquences compatibles instantané',
      'Contexte TNT français intégré',
      'Mobile-first, aucune installation',
      'Interface en français, claire et directe',
    ],
    differentiator:
      "Les logiciels de coordination radio existent, mais ils sont faits pour les ingénieurs et coûtent des centaines d'euros. Speed RF fait l'essentiel — vous donner des fréquences fiables — sans la complexité ni le prix. Si vous voulez juste que vos micros marchent, c'est exactement ça.",
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
