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
      'Des fréquences fiables pour vos micros et retours sans fil — en 30 secondes, depuis votre téléphone.',
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
      "Un micro ou un retour qui grésille, se coupe ou capte des parasites en plein évènement ? 9 fois sur 10, c'est une question de fréquences mal choisies. Speed RF vous donne des fréquences propres et compatibles en quelques secondes : vous indiquez votre matériel et votre ville, l'appli s'occupe du reste. Peu importe la marque ou l'âge de votre matériel, du haut de gamme au modèle d'entrée de gamme. Aucun logiciel à installer, aucune compétence technique requise.",
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
        text: 'Évite automatiquement les chaînes TV (TNT) qui brouillent vos fréquences, selon votre région.',
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
      'Choisissez votre matériel (marques et modèles de vos micros et retours).',
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
      "Les logiciels de coordination radio existent, mais ils sont faits pour les ingénieurs et coûtent des centaines d'euros. Speed RF fait l'essentiel — vous donner des fréquences fiables — sans la complexité ni le prix. Si vous voulez juste que tout marche du premier coup, c'est exactement ça.",
  },
  {
    slug: 'rf-shot',
    name: 'RF Shot',
    tagline:
      'La coordination avancée quand vous gérez beaucoup de fréquences — sans logiciel d’ingénieur.',
    price: '24,99 €',
    priceNote: 'Payé une seule fois · à vous pour toujours',
    free: false,
    audience: 'Gros plateaux · 100+ fréquences coordonnées',
    image: '/products/rf-shot.svg',
    pitch:
      "Quand vous faites tourner des dizaines de fréquences (micros et retours sans fil) en même temps, elles finissent par se gêner — même bien choisies. RF Shot va plus loin que Speed RF : il coordonne plus de 100 fréquences, calcule les intermodulations jusqu’à l’ordre 7 (IM3, IM5, IM7) et les produits à 3 émetteurs (3TX), et gère plusieurs bandes à la fois. Le tout dans votre navigateur, en français, sans rien installer.",
    heroPoints: [
      'Coordonne plus de 100 fréquences (micros & retours)',
      'Intermodulations jusqu’à l’ordre 7 (IM3 / IM5 / IM7) et 3 émetteurs (3TX)',
      'Plusieurs bandes de fréquences en même temps',
      'Enregistrement de session — idéal pour les tournées',
    ],
    summary:
      "RF Shot, c'est la coordination de fréquences pour les configurations exigeantes, sans la lourdeur d'un logiciel desktop. Il coordonne plus de 100 fréquences qui restent stables même avec énormément d'émetteurs, en évitant les intermodulations (jusqu'à l'ordre 7 et les produits à 3 émetteurs) qui provoquent bruits et décrochages. Pensé pour obtenir un résultat fiable sans devoir devenir ingénieur RF.",
    benefits: [
      {
        title: 'Tient la charge sur les gros plateaux',
        text: 'Spectacles, comédies musicales, conférences, cultes : RF Shot coordonne plus de 100 fréquences et les garde propres, même sur les configs les plus lourdes.',
      },
      {
        title: 'Anti-intermodulation jusqu’à l’ordre 7',
        text: 'Calcule les fréquences parasites qui naissent quand plusieurs émetteurs tournent ensemble — IM3, IM5, IM7 et produits à 3 émetteurs (3TX). La cause n°1 des bruits sur les grosses configs.',
      },
      {
        title: 'Plusieurs bandes à la fois',
        text: 'Mélangez plusieurs marques et plusieurs bandes : RF Shot coordonne micros et retours d’un seul coup.',
      },
      {
        title: 'Compatible toutes marques',
        text: 'Sennheiser, Shure, Sony, Wisycom… et même le matériel ancien ou d’entrée de gamme.',
      },
      {
        title: 'Enregistrement de session',
        text: 'Sauvegardez votre plan de fréquences et rechargez-le en un clic. Idéal en tournée : on règle une fois, on rejoue chaque soir.',
      },
      {
        title: 'Rien à installer',
        text: 'Tout tourne dans le navigateur, sur ordi comme sur tablette. Aucun logiciel à acheter ni à mettre à jour.',
      },
    ],
    steps: [
      'Listez votre matériel (marques, modèles, nombre d’émetteurs).',
      'Indiquez votre lieu et les bandes que vous utilisez.',
      'Recevez un plan coordonné sans intermodulation — à enregistrer et rejouer en tournée.',
    ],
    features: [
      'Plus de 100 fréquences coordonnées',
      'Intermodulations IM3 / IM5 / IM7 et 3 émetteurs (3TX)',
      'Gestion multi-bandes',
      'Enregistrement de session',
      'Web, en français, sans installation',
    ],
    differentiator:
      "Les logiciels de coordination pro font le travail, mais ils coûtent des centaines d'euros et demandent une vraie formation. RF Shot vous donne l'essentiel de cette puissance — 100+ fréquences, intermodulations avancées, multi-bandes, sessions enregistrables — dans une appli web simple et en français. La précision d'un outil pro, sans le prix ni la prise de tête.",
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
