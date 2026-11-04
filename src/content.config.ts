import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { insightSchema, eventSchema, initiativeSchema } from './lib/schemas';
export const collections = {
  insights: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/insights' }),
    schema: insightSchema,
  }),
  events: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/events' }),
    schema: eventSchema,
  }),
  initiatives: defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/content/initiatives' }),
    schema: initiativeSchema,
  }),
};
