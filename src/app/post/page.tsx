import PostList from '@/components/PostList';
import type { NextPage, Metadata } from 'next';

async function fetcher() {
  const client = await import('../../lib/mongodb/connect').then(
    (mod) => mod.default,
  );
  const db = client.db('blog-content');
  const collection = db.collection('posts');
  const posts = await collection.find({}).toArray();
  return JSON.parse(JSON.stringify(posts));
}

export const metadata: Metadata = {
  title: 'Post',
};

const Home = async () => {
  const posts = await fetcher();
  return <PostList posts={posts} />;
};

export default Home;
