import PostList from '@/components/PostList';
import type { Metadata } from 'next';
import { getPosts } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'Posts',
  description:
    'Read my latest thoughts and insights on technology, programming, and more.',
  openGraph: {
    title: 'Blog Posts | Ethan Huang',
    description:
      'Read my latest thoughts and insights on technology, programming, and more.',
    type: 'website',
  },
};

export default async function PostsPage() {
  const posts = await getPosts();
  return (
    <article className="my-8 space-y-8 transition-colors">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6 dark:border-gray-700">
        <h1 className="text-2xl font-bold">Posts</h1>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          Thoughts, writings, etc.
        </p>
      </div>

      {/* Post List */}
      <section>
        <PostList posts={posts} />
      </section>
    </article>
  );
}
