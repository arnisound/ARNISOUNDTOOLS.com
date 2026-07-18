// @ts-check
import { defineConfig } from 'astro/config';

// Site vitrine statique.
// - En prod (domaine racine) / local : base "/" (défaut).
// - Sur GitHub Pages projet : PAGES_BASE="/ARNISOUNDTOOLS.com/" + PAGES_SITE.
//   (définis par le workflow .github/workflows/deploy.yml)
export default defineConfig({
  site: process.env.PAGES_SITE || 'https://arnisoundtools.com',
  base: process.env.PAGES_BASE || '/',
  output: 'static',
});
