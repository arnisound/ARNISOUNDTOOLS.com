import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Les articles vivent dans docs/blog/*.md (hors src/).
const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './docs/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    keywords: z.array(z.string()).default([]),
    statut: z.enum(['brouillon', 'publie']).default('brouillon'),
    date: z.coerce.date(),
  }),
});

export const collections = { blog };
