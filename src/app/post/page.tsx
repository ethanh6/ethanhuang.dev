import PostList from '@/components/PostList';
import type { Metadata } from 'next';

interface Post {
  title: string;
  slug: string;
  date: string;
  excerpt?: string;
  readingTime?: string;
}

async function fetcher(): Promise<Post[]> {
  try {
    const client = await import('../../lib/mongodb/connect').then(
      (mod) => mod.default,
    );
    const db = client.db('blog-content');
    const collection = db.collection('posts');
    const posts = await collection.find({}).toArray();
    return JSON.parse(JSON.stringify(posts));
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export const metadata: Metadata = {
  title: 'Blog Posts | Ethan Huang',
  description: 'Read my latest thoughts and insights on technology, programming, and more.',
  openGraph: {
    title: 'Blog Posts | Ethan Huang',
    description: 'Read my latest thoughts and insights on technology, programming, and more.',
    type: 'website',
  },
};

export default async function PostsPage() {
  const posts = await fetcher();
  return (
    <div className="my-8">
      <div className="mb-12 text-center">
        <h1 className="highlight text-4xl font-bold">Blog Posts</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Thoughts, tutorials, and insights about technology and programming
        </p>
      </div>
      <PostList posts={posts} />
    </div>
  );
}
