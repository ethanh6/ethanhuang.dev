import { CustomMdxComponent } from '@/components/CustomMDX';
import ReactMarkdown from 'react-markdown';

async function fetcher() {
  const client = await import('../../../lib/mongodb/connect').then(
    (mod) => mod.default,
  );
  const db = client.db('blog-content');
  const collection = db.collection('posts');
  const posts = await collection.find({}).toArray();
  return JSON.parse(JSON.stringify(posts));
}

export async function generateStaticParams() {
  const posts = await fetcher();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const posts = await fetcher();
  const post = posts.find((post) => post.slug === params.slug);
  return post.content ? (
    <ReactMarkdown components={CustomMdxComponent}>
      {post.content}
    </ReactMarkdown>
  ) : (
    <div>Post not found</div>
  );
}
