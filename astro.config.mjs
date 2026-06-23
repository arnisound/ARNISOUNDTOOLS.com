// @ts-check
import { defineConfig } from 'astro/config';

// Site vitrine statique déployé sur Cloudflare Pages.
// Les Workers (auth, licences, generatePlan) seront ajoutés séparément.
export default defineConfig({
  site: 'https://arnisoundtools.com',
  output: 'static',
});
