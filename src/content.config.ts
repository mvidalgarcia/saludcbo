import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const translatedText = z.object({ es: z.string(), en: z.string() });

const services = defineCollection({
  loader: file('./src/data/services.json'),
  schema: z.object({
    id: z.string(),
    icon: z.string(),
    order: z.number(),
    slug: z.object({ es: z.string(), en: z.string() }),
    translations: z.object({
      es: z.object({
        title: z.string(),
        shortTitle: z.string(),
        tagline: z.string(),
        description: z.string(),
        features: z.array(z.string()),
        process: z.array(z.object({ title: z.string(), body: z.string() })).optional(),
        types: z.array(z.object({ title: z.string(), body: z.string() })).optional(),
      }),
      en: z.object({
        title: z.string(),
        shortTitle: z.string(),
        tagline: z.string(),
        description: z.string(),
        features: z.array(z.string()),
        process: z.array(z.object({ title: z.string(), body: z.string() })).optional(),
        types: z.array(z.object({ title: z.string(), body: z.string() })).optional(),
      }),
    }),
  }),
});

const team = defineCollection({
  loader: file('./src/data/team.json'),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    photo: z.string().optional(),
    linkedin: z.string().optional(),
    instagram: z.string().optional(),
    translations: z.object({
      es: z.object({
        name: z.string(),
        role: z.string(),
        credentials: z.string(),
        bio: z.string(),
      }),
      en: z.object({
        name: z.string(),
        role: z.string(),
        credentials: z.string(),
        bio: z.string(),
      }),
    }),
  }),
});

const centers = defineCollection({
  loader: file('./src/data/centers.json'),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    address: z.string(),
    city: z.string(),
    phone: z.string(),
    email: z.string(),
    mapUrl: z.string().optional(),
    image: z.string().optional(),
    parking: z.boolean().default(true),
    services: z.array(z.string()),
    hours: z.array(z.object({ days: translatedText, time: z.string() })),
    translations: z.object({
      es: z.object({ name: z.string(), description: z.string() }),
      en: z.object({ name: z.string(), description: z.string() }),
    }),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.string(),
    draft: z.boolean().default(true),
    lang: z.enum(['es', 'en']).default('es'),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
  }),
});

export const collections = { services, team, centers, blog };
