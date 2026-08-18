import type { APIRoute } from 'astro';
import { products } from '../data/products';

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

export const GET: APIRoute = () => {
  const paths = [
    ...staticPaths.slice(0, 1),
    ...products.map((p) => `/${p.slug}/`),
    ...staticPaths.slice(1),
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
