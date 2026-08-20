import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    cover: z.string().optional(),
    tags: z.array(z.string()).optional(),
    link: z.string().url().optional(),
    date: z.coerce.date(),
  }),
});

export const collections = { projects };
