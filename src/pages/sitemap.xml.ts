import type { APIRoute } from 'astro';
import { products } from '../data/products';
import { getCollection } from 'astro:content';

const SITE = 'https://arnisoundtools.com';

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
  const blogPaths = ['/blog/', ...posts.map((p) => `/blog/${p.data.slug}/`)];

  const paths = [
    ...staticPaths.slice(0, 1),
    ...products.map((p) => `/${p.slug}/`),
    ...staticPaths.slice(1),
    ...blogPaths,
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${SITE}${p}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
