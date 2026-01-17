import PostList from '@/components/PostList';
import type { Metadata } from 'next';
import { getPosts } from '@/lib/markdown';

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
  const posts = await getPosts();
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
