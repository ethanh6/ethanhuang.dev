import PostList from '@/components/PostList';
import type { NextPage, Metadata } from 'next';

import { getPosts } from '@/lib/markdown';

import { getFilesByContentType, getContentByFileName } from '@/lib/github';

export const metadata: Metadata = {
  title: 'Post',
};

const Home = async () => {
  // deprecated: reading local MDX files
  // const posts = await getPosts();

  const files = await getFilesByContentType({
    contentType: 'post',
  });

  let posts = [];

  for (const file of files) {
    const { content, metadata } = await getContentByFileName({
      contentType: 'post',
      file,
    });
    posts.push({ ...metadata });
  }

  return <PostList posts={posts} />;
};

export default Home;
