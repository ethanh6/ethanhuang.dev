import ReactMarkdown from 'react-markdown';
import { getFilesByContentType, getContentByFileName } from '@/lib/github';
import { CustomMdxComponent } from '@/components/CustomMDX';

export async function generateStaticParams() {
  const projects = await getFilesByContentType({
    contentType: 'project',
  });

  return projects.map((project) => ({
    slug: project,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { content, metadata } = await getContentByFileName({
    contentType: 'project',
    file: `${params.slug}.mdx`, // add {slug}.mdx is the file name
  });

  return (
    <div>
      <ReactMarkdown components={CustomMdxComponent}>{content}</ReactMarkdown>
    </div>
  );
}
