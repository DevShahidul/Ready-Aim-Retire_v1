import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    author: z.string().default('ReadyAimRetire Team'),
    category: z.enum([
      'Retirement Planning',
      'Tax Strategies',
      'Market Insights',
      'Lifestyle'
    ]),
    image: z.string().optional(),
    readTime: z.string(), // e.g., "5 min read"
  }),
});

export const collections = {
  blog: blogCollection,
};
