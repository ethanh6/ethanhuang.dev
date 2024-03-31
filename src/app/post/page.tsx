import PostList from '@/components/PostList';
import type { NextPage, Metadata } from 'next';

import { getPosts } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'Post',
};

const Home = async () => {
  const posts = await getPosts();

  return <PostList posts={posts} />;
};

export default Home;
