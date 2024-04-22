import PostList from '@/components/PostList';
import type { NextPage, Metadata } from 'next';

import { getFilesByContentType, getContentByFileName } from '@/lib/github';

import { getFilesByContentType, getContentByFileName } from '@/lib/github';

export const metadata: Metadata = {
  title: 'Post',
};

const Home = async () => {
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
  posts.sort((a, b) => b.date.localeCompare(a.date));

  return <PostList posts={posts} />;
};

export default Home;
