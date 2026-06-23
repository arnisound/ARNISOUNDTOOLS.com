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
  /** Paragraphe « grandes lignes » affiché dans le hero (optionnel). */
  pitch?: string;
  /** Points clés scannables affichés dans le hero (optionnel). */
  heroPoints?: string[];
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
    audience: 'Micros & retours sans fil',
    image: '/products/speed-rf.svg',
    pitch:
      "Speed RF calcule pour vous des fréquences fiables pour vos micros et vos retours sans fil. Vous indiquez votre matériel et votre lieu, l'appli vous donne des canaux qui ne se gênent pas — sans scanner, sans logiciel, sans connaissances techniques.",
    heroPoints: [
      'Compatible toutes marques, même ancien ou bas de gamme',
      'Prêt en 30 secondes, depuis votre téléphone',
      'Évite les chaînes TV françaises (TNT)',
      'Paiement unique, sans abonnement',
    ],
    summary:
      "Un micro qui grésille, se coupe ou capte des parasites en plein évènement ? 9 fois sur 10, c'est une question de fréquences mal choisies. Speed RF vous donne des fréquences propres et compatibles en quelques secondes : vous indiquez votre matériel et votre ville, l'appli s'occupe du reste. Peu importe la marque ou l'âge de vos micros, du haut de gamme au modèle d'entrée de gamme. Aucun logiciel à installer, aucune compétence technique requise.",
    benefits: [
      {
        title: 'Compatible avec toutes les marques',
        text: 'Sennheiser, Shure, AKG, LD Systems, the t.bone… et même le matériel ancien ou d’entrée de gamme. Si ça émet en HF, Speed RF s’en occupe.',
      },
      {
        title: 'Fini les coupures et les parasites',
        text: 'Des fréquences sans interférence, calculées pour ne pas se gêner entre elles. Plus de bruits ni de décrochages en plein évènement.',
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
    tagline:
      'La coordination avancée quand vous avez beaucoup de micros — sans logiciel d’ingénieur.',
    price: '24,99 €',
    priceNote: 'Payé une seule fois · à vous pour toujours',
    free: false,
    audience: 'Gros plateaux · Multi-micros & retours',
    image: '/products/rf-shot.svg',
    pitch:
      "Quand vous faites tourner 8, 12 ou 20 micros et retours sans fil en même temps, les fréquences finissent par se gêner — même bien choisies. RF Shot va plus loin que Speed RF : il calcule aussi les intermodulations (ces fréquences « fantômes » qui apparaissent quand plusieurs émetteurs tournent ensemble) et gère plusieurs bandes à la fois. Le tout dans votre navigateur, en français, sans rien installer.",
    heroPoints: [
      'Gère les gros plateaux : 5 à 20 micros et plus',
      'Calcule les intermodulations (IM3 / IM5)',
      'Plusieurs bandes de fréquences en même temps',
      'Web, en français, rien à installer',
    ],
    summary:
      "RF Shot, c'est la coordination de fréquences pour les configurations exigeantes, sans la lourdeur d'un logiciel desktop. Il trouve des fréquences qui restent stables même avec beaucoup d'émetteurs, en évitant les intermodulations qui provoquent bruits et décrochages. Pensé pour obtenir un résultat fiable sans devoir devenir ingénieur RF.",
    benefits: [
      {
        title: 'Tient la charge sur les gros plateaux',
        text: 'Spectacles, comédies musicales, conférences, cultes : RF Shot garde vos fréquences propres même avec 20 émetteurs ou plus.',
      },
      {
        title: 'Anti-intermodulation (IM3 / IM5)',
        text: 'Calcule les fréquences parasites qui naissent quand plusieurs micros émettent ensemble — la cause n°1 des bruits sur les grosses configs.',
      },
      {
        title: 'Plusieurs bandes à la fois',
        text: 'Mélangez plusieurs marques et plusieurs bandes de fréquences : RF Shot coordonne le tout d’un seul coup.',
      },
      {
        title: 'Compatible toutes marques',
        text: 'Sennheiser, Shure, Sony, Wisycom… et même le matériel ancien ou d’entrée de gamme.',
      },
      {
        title: 'Rien à installer',
        text: 'Tout tourne dans le navigateur, sur ordi comme sur tablette. Aucun logiciel à acheter ni à mettre à jour.',
      },
      {
        title: 'Payé une fois, pour toujours',
        text: '24,99 € une seule fois. Pas d’abonnement, pas de licence annuelle à renouveler.',
      },
    ],
    steps: [
      'Listez votre matériel (marques, modèles, nombre d’émetteurs).',
      'Indiquez votre lieu et les bandes que vous utilisez.',
      'Recevez un plan de fréquences coordonné, sans intermodulation.',
    ],
    features: [
      'Calcul des intermodulations IM3 / IM5',
      'Gestion multi-bandes',
      'Coordination hybride avancée',
      'Web, en français, sans installation',
    ],
    differentiator:
      "Les logiciels de coordination pro font le travail, mais ils coûtent des centaines d'euros et demandent une vraie formation. RF Shot vous donne l'essentiel de cette puissance — intermodulations, multi-bandes, gros plateaux — dans une appli web simple et en français. La précision d'un outil pro, sans le prix ni la prise de tête.",
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
