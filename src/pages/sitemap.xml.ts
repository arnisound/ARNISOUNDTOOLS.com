import type { APIRoute } from 'astro';
import { products } from '../data/products';
import { getCollection } from 'astro:content';

const SITE = 'https://arnisoundtools.com';
const today = new Date().toISOString().slice(0, 10);

// Pages publiques indexables (on exclut /login et /dashboard).
const staticPaths = [
  '/',
  '/a-propos/',
  '/faq/',
  '/mentions-legales/',
  '/confidentialite/',
  '/cgv/',
];

export const GET: APIRoute = async () => {
  const posts = (await getCollection('blog')).filter((p) => p.data.statut === 'publie');

  // { loc, lastmod } — les articles portent leur propre date, le reste la date du build.
  const entries: { loc: string; lastmod: string }[] = [
    { loc: '/', lastmod: today },
    ...products.map((p) => ({ loc: `/${p.slug}/`, lastmod: today })),
    ...staticPaths.slice(1).map((p) => ({ loc: p, lastmod: today })),
    { loc: '/blog/', lastmod: today },
    ...posts.map((p) => ({
      loc: `/blog/${p.data.slug}/`,
      lastmod: p.data.date.toISOString().slice(0, 10),
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map((e) => `  <url><loc>${SITE}${e.loc}</loc><lastmod>${e.lastmod}</lastmod></url>`)
  .join('\n')}
</urlset>
`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
