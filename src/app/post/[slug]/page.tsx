import ReactMarkdown from 'react-markdown';
import { getFilesByContentType, getContentByFileName } from '@/lib/github';
import { CustomMdxComponent } from '@/components/CustomMDX';

export async function generateStaticParams() {
  const posts = await getFilesByContentType({
    contentType: 'post',
  });

  console.log(posts);
  return posts.map((post) => ({
    slug: post,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { content, metadata } = await getContentByFileName({
    contentType: 'post',
    file: `${params.slug}.mdx`, // add {slug}.mdx is the file name
  });

  return (
    <div>
      <ReactMarkdown components={CustomMdxComponent}>{content}</ReactMarkdown>
    </div>
  );
}
