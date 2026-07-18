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
  /** Lien direct vers l'app (si elle est déjà en ligne, hébergée ailleurs). */
  appUrl?: string;
  /** Produit annoncé mais pas encore disponible (affiche « Bientôt », bouton inactif). */
  comingSoon?: boolean;
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
    image: '/products/fiche-tech.svg',
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
  {
    slug: 'av-calc',
    name: 'AV Calc',
    tagline:
      '71 calculateurs, formules et pense-bêtes du métier, réunis dans une seule appli.',
    price: 'Gratuit',
    priceNote: 'Compte gratuit · sans carte bancaire',
    free: true,
    audience: 'Boîte à outils du régisseur · 71 calculateurs',
    image: '/products/av-calc.svg',
    appUrl: 'https://arnisound.github.io/AV-CALC/',
    pitch:
      "AV Calc réunit 71 calculateurs, formules et pense-bêtes du métier dans une seule appli web. Conversion, son, vidéo, éclairage, électricité, réseau, connectique, structure : le bon outil est toujours à portée de main, en prépa comme sur le terrain. Gratuit, en français, rien à installer.",
    heroPoints: [
      '71 outils répartis en 8 catégories',
      'Son, vidéo, éclairage, élec, réseau, structure…',
      'Schémas de brochage et de levage inclus',
      'Repères et réglementation France intégrés',
    ],
    summary:
      "Fini les formules griffonnées et les dix applis différentes : AV Calc regroupe 71 outils du quotidien de la régie, classés en 8 catégories. Du calcul de delay au brochage d'un Socapex, de la loi d'Ohm à l'angle d'élingage, tout est réuni au même endroit, en français. Gratuit avec un simple compte.",
    benefits: [
      {
        title: 'Conversion — 13 outils',
        text: 'dB ↔ ratio, BPM → delay, période ↔ fréquence, watts ↔ dBm, fréquence ↔ note, AWG ↔ mm², dBu/dBV/dBµV… les conversions de base, toujours sous la main.',
      },
      {
        title: 'Son — 16 outils',
        text: 'Générateurs de signal, alignement de delay HP, SPL & cumul de sources, RT60 (Sabine), subs cardio/end-fire, seuil de limiteur, dose & réglementation…',
      },
      {
        title: 'Vidéo — 10 outils',
        text: 'Vidéoprojecteur (focale/distance), timecode ↔ frames, débit → taille, pixels et pitch d’un mur LED, lumens nécessaires, standards SDI, résolutions…',
      },
      {
        title: 'Éclairage — 6 outils',
        text: 'Adresse DMX ↔ dipswitch, univers & patch, faisceau → diamètre, lux ↔ lumens, puissance d’un kit lumière, températures de couleur.',
      },
      {
        title: 'Électricité — 12 outils',
        text: 'Loi d’Ohm, courant mono/tri, chute de tension, calibre disjoncteur, kVA ↔ kW, groupe électrogène, section de câble conseillée, équilibrage triphasé…',
      },
      {
        title: 'Réseau — 6 outils',
        text: 'Débit Dante/AoIP, canaux max par lien, Art-Net/sACN, budget PoE, calculateur IP et repères réseau pour ne rien saturer.',
      },
      {
        title: 'Connectique — 17 brochages',
        text: 'Un outil, 17 plans de soudure avec sélecteur : XLR, jack TRS/TS, Speakon NL4, DMX 3/5 pts, RJ45/etherCON, Socapex, Harting, powerCON, BNC, MIDI…',
      },
      {
        title: 'Structure — 7 outils',
        text: 'Angle d’élingage (avec schéma), charge par appuis, bridle 2 points (avec schéma), centre de gravité, CMU & coefficient, poids de référence.',
      },
    ],
    features: [
      '71 outils répartis en 8 catégories',
      'Son, vidéo, éclairage, électricité, réseau, structure',
      'Schémas de brochage (connectique) et de levage (structure)',
      'Repères et réglementation France intégrés',
      'Web, en français — rien à installer',
    ],
    differentiator:
      "Au lieu d'une dizaine d'applis payantes ou d'un tableur bricolé, AV Calc rassemble 71 outils du métier — du son au levage — dans une seule appli web claire, en français. Gratuit : il suffit d'un compte.",
  },
  {
    slug: 'reperages',
    name: 'Repérages',
    tagline:
      'Du terrain au dossier technique, en une seule appli.',
    price: '19,99 €',
    priceNote: 'Offre de lancement · licence perpétuelle · bientôt disponible',
    free: false,
    comingSoon: true,
    audience: 'Régie · repérage & plans techniques',
    image: '/products/reperages.svg',
    pitch:
      "Repérages vous accompagne de la première visite de site jusqu'au dossier technique final. Sur le terrain, délimitez la zone au GPS et posez vos repères géolocalisés avec photos. La zone devient un plan à l'échelle — sans calibration — où vous implantez scènes, structures, armoires et matériel aux dimensions réelles, sur 9 calques métier. Le câblage, le décompte et le dossier (PDF, image HD, DXF) se construisent presque tout seuls.",
    heroPoints: [
      'Repérage GPS sur carte ou satellite, avec photos géolocalisées',
      'Plan à l’échelle sans calibration (l’échelle vient du GPS)',
      '9 calques métier + banque de matériel personnalisée',
      'Câblage intelligent, décompte auto, export PDF / image / DXF',
    ],
    summary:
      "De la visite de repérage au dossier technique, Repérages réunit ce qu'un technicien du spectacle trimballe d'habitude entre carnet, appareil photo, mètre et logiciel de CAO. Vous délimitez le site au GPS, posez vos repères, implantez le matériel aux vraies dimensions, câblez — et l'appli calcule le décompte et génère le dossier. Pensée pour les régisseurs et prestataires son/lumière/vidéo, en français, dans le navigateur.",
    benefits: [
      {
        title: 'Sur le terrain',
        text: 'Créez l’événement et délimitez la zone à même la carte (plan ou satellite) — au doigt ou en marchant les limites au GPS. Posez des repères géolocalisés (arrivée EDF, point d’eau, accès livraison, contraintes…) avec photos. En intérieur, croquis aux cotes au mètre laser.',
      },
      {
        title: 'Un plan à l’échelle, sans calibration',
        text: 'La zone délimitée devient votre plan de travail : l’échelle est donnée par le GPS. Placez scènes, chapiteaux, barnums, armoires électriques, groupes électrogènes, enceintes, écrans LED… aux dimensions réelles.',
      },
      {
        title: '9 calques métier',
        text: 'Implantation, structures, électricité, eau, réseau, vidéo, audio, lumière, sécurité. Rotation au doigt, multi-sélection, annuler/rétablir, superposition de vos plans importés, banque de matériel personnalisée.',
      },
      {
        title: 'Câblage intelligent',
        text: 'Les câbles s’aimantent aux objets et y restent ancrés : déplacez une armoire, le câble suit. Chaque équipement connaît ses départs réels — une armoire TRI 63A propose ses 2× TRI 32A ou 12× 16A mono, une stagebox ses liaisons Dante/AES50/XLR, un node ArtNet ses sorties DMX.',
      },
      {
        title: 'Le décompte parfait',
        text: 'Le récap se construit tout seul : objets comptés par calque avec leurs dimensions, câbles découpés en tronçons du commerce (5, 10, 20 m… touret 100 m) avec chute calculée, câbles de secours réglables, bilan de puissance en kW, suivi de montage le jour J.',
      },
      {
        title: 'Le dossier',
        text: 'Exportez un PDF multi-pages (plan avec zone d’impression A4 + récap matériel complet), une image haute résolution, ou un fichier DXF ouvrable dans AutoCAD — avec en option les bâtiments et voiries alentour.',
      },
    ],
    steps: [
      'Sur site : créez l’événement, délimitez la zone au GPS et posez vos repères photo.',
      'Implantez votre matériel aux vraies dimensions sur les 9 calques, puis câblez.',
      'Exportez le dossier : PDF A4, image HD ou DXF, avec le décompte matériel complet.',
    ],
    features: [
      'Repérage GPS (carte/satellite) + repères photo géolocalisés',
      'Plan à l’échelle sans calibration, 9 calques métier',
      'Câblage aimanté avec départs réels par équipement',
      'Décompte auto (tronçons, chute, secours, bilan kW)',
      'Export PDF A4, image HD et DXF (AutoCAD)',
    ],
    differentiator:
      "D'habitude, un repérage finit en carnet de notes, photos éparpillées et longues heures de CAO. Repérages relie tout : le relevé terrain devient directement le plan à l'échelle, le câblage et le décompte, jusqu'au dossier prêt à envoyer. Un seul outil, du site au PDF.",
  },
];

export const bundle = {
  name: 'Bundle Speed RF + RF Shot',
  price: '29,99 €',
  was: '34,98 €',
  note: 'Les deux outils RF, un seul achat.',
};

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);
