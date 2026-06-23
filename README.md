# Arnisound Tools — Site

Site vitrine + squelette comptes pour [arnisoundtools.com](https://arnisoundtools.com).
Suite d'outils web pour le spectacle vivant et l'événementiel.

## Stack

- **[Astro](https://astro.build)** — site statique, léger et rapide
- **Cloudflare Pages** — hébergement (build : `npm run build`, dossier de sortie : `dist`)
- Workers / D1 / Lemon Squeezy : **à venir** (auth, licences, paiement)

## Démarrage

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # génère dist/
npm run preview  # prévisualise le build
```

## Structure

```
src/
├── layouts/Base.astro          Layout global (header + footer, ou bare)
├── components/
│   ├── Header.astro            Navigation + menu mobile
│   └── Footer.astro
├── data/products.ts            ⭐ Source unique des produits/prix
├── styles/global.css           ⭐ Design system (couleurs en variables CSS)
└── pages/
    ├── index.astro             Accueil
    ├── [product].astro         Pages produits (speed-rf, rf-shot, fiche-tech)
    ├── a-propos.astro
    ├── login.astro             Maquette (auth non branchée)
    ├── dashboard.astro         Maquette (licences fictives)
    └── 404.astro
```

## À personnaliser

- **Couleurs** : `src/styles/global.css` → bloc `:root`. La palette actuelle
  (accent orange `#FF6A2C`) est **temporaire**, à remplacer par les couleurs du logo.
- **Logo** : remplacer le `.brand__mark` (lettre « A ») dans Header/Footer et
  `public/favicon.svg` par le vrai logo.
- **Produits / prix** : `src/data/products.ts`.

## Reste à brancher (étapes suivantes)

- [ ] Authentification (Cloudflare Worker + JWT + D1)
- [ ] Paiement et webhooks licences (Lemon Squeezy → Worker → D1)
- [ ] Pages applicatives `/app/*` (Speed RF, RF Shot, Fiche Tech)
- [ ] PWA (manifest + service worker)
