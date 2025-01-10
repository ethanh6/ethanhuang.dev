import * as fs from 'fs';
import * as path from 'path';

async function getMDXData(content_type: ContentType) {
  // get slugs
  const content_path = path.join(
    process.cwd(),
    `src/app/${content_type === 'Post' ? 'post' : 'project'}/(content)`,
  );

  const slugs = fs
    .readdirSync(content_path, { withFileTypes: true })
    .filter((d) => d.isDirectory());

  // Retrieve metadata from MDX files, filter by content type
  const mdxFiles = await Promise.all(
    slugs.map(async ({ name }) => {
      const mdxModule = await import(
        `../app/${content_type === 'Post' ? 'post' : 'project'}/(content)/${name}/page.mdx`
      );
      const metadata = await mdxModule.metadata;
      return {
        // slug: name,
        ...metadata,
      };
    }),
  );

  return mdxFiles
    .filter((mdx) => mdx.type === content_type && mdx.enabled)
    .sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getPosts() {
  const posts = await getMDXData('Post');
  return posts;
}

export async function getProjects() {
  const projects = getMDXData('Project');
  return projects;
}
