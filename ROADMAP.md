# Roadmap — Arnisound Tools

Feuille de route pour passer du **site vitrine** actuel à l'**écosystème opérationnel**
(apps hébergées, comptes, licences). À faire « le moment venu », pas dans l'immédiat.

## État actuel

- Site vitrine statique (Astro), déployé sur **GitHub Pages**.
- Produits présentés : **Speed RF** (9,99 €), **RF Shot** (24,99 €), **Fiche Tech Creator** (gratuit), **AV Calc** (gratuit).
- CTA des produits payants → `/login` (placeholder, cf. `// TODO: brancher Lemon Squeezy` dans `src/pages/[product].astro`).
- Pages `/login` et `/dashboard` = coquilles, pas encore d'auth réelle.
- Seule app réellement en ligne : **AV Calc**, hébergée sur GitHub Pages
  (`https://arnisound.github.io/AV-CALC/`), liée via le champ `appUrl` du produit.

## Cible : écosystème derrière Cloudflare

### 1. Hébergement des applications
- Héberger chaque app (Speed RF, RF Shot, Fiche Tech, AV Calc) derrière **Cloudflare**.
- **AV Calc : migrer de GitHub Pages vers Cloudflare** et mettre à jour son `appUrl`
  (arrêter de passer par `arnisound.github.io/AV-CALC/`).
- Choix à trancher : sous-domaines (`speedrf.arnisoundtools.com`, `avcalc.arnisoundtools.com`…)
  ou sous-chemins. Le champ `appUrl` (dans `src/data/products.ts`) est déjà le point
  de branchement : il suffira de renseigner la bonne URL par app.

### 2. Comptes (authentification)
- Un seul compte pour tout l'écosystème (site + toutes les apps).
- Brancher un vrai service d'auth (Cloudflare Access / Zero Trust, ou Supabase / Clerk / Auth0…).
- Remplacer les coquilles `/login` et `/dashboard` par le vrai flux.

### 3. Licences (produits payants)
- Speed RF et RF Shot sont payants → achat qui débloque une licence rattachée au compte.
- Brancher le paiement (Lemon Squeezy prévu, cf. TODO dans `[product].astro`).
- Chaque app payante vérifie la licence au chargement.
- Fiche Tech et AV Calc restent gratuits (compte suffisant, pas de licence).

### 4. Cloudflare (la colle)
- DNS + proxy/CDN + TLS pour `arnisoundtools.com`.
- Éventuellement Cloudflare Pages/Workers pour héberger site et apps.
- Access pour l'auth, KV/D1 pour stocker comptes et licences.

## Points ouverts / à préciser
- Liste réelle des calculateurs d'**AV Calc** (pour enrichir la page produit).
- Logos manquants : Fiche Tech, AV Calc (Speed RF et RF Shot en ont un).
- Modèle sous-domaines vs sous-chemins pour les apps.
- Choix définitifs des briques : auth, paiement, hébergement.
