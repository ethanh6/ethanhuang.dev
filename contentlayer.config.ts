import rehypeCodeTitles from 'rehype-code-titles';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';

// import { DEFAULT_LOCALE, LOCALES } from './src/configs/i18nConfigs';
import { defineDocumentType, makeSource } from './src/lib/contentLayerAdapter';
import imageMetadata from './src/plugins/imageMetadata';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `content/post/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    language: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'string',
      required: false,
    },
    socialImage: {
      type: 'string',
      required: false,
    },
  },
  computedFields: {
    path: {
      type: 'string',
      resolve: (val) => `/post/${val.slug}`,
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `content/projects/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
      required: true,
    },
    slug: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
    language: {
      type: 'string',
      required: true,
    },
    tags: {
      type: 'string',
      required: false,
    },
    imgSrc: {
      type: 'string',
      required: true,
    },
    imgAlt: {
      type: 'string',
      required: true,
    },
    socialImage: {
      type: 'string',
      required: false,
    },
  },
  computedFields: {
    path: {
      type: 'string',
      resolve: (val) => `/project/${val.slug}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Project],
  mdx: {
    rehypePlugins: [
      rehypeSlug, // For generating slugs for headings
      rehypeCodeTitles, // For adding titles to code blocks
      [rehypePrism, { ignoreMissing: true }], // For code syntax highlighting
      imageMetadata, // For adding image metadata (width, height)
    ],
  },
});
