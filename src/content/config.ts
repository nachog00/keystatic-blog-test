// @ts-ignore
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
  }),
});

/* projects: collection({
  label: 'Projects',
  slugField: 'title',
  path: 'src/content/projects/*',
  format: { contentField: 'content' },
  schema: {
    title: fields.slug({ name: { label: 'Title' } }),
    cover: fields.image({
      label: 'Cover',
      directory: 'src/assets/images/projects',
      publicPath: '../../assets/images/projects/',
    }),
    content: fields.document({
      label: 'Content',
      formatting: true,
      dividers: true,
      links: true,
      images: {
        directory: 'src/assets/images/projects',
        publicPath: '../../assets/images/projects/',
      },
    }),
  },
}), */

const projects = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    cover: image(),
  }),
});

export const collections = { posts , projects };
