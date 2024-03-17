import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import LayoutPerPage from '@/components/LayoutPerPage';
import PostLayout from '@/components/PostLayout';
import { siteConfigs } from '@/configs/siteConfigs';

import readContent from '@/lib/markdown';

export function generateStaticParams() {
  const posts: ContentData[] = readContent({ type: 'post' });

  return posts.map((post) => ({
    slug: post.data.slug,
  }));
}

const PostPage = ({ params }: { params: { slug: string } }) => {
  const posts: ContentData[] = readContent({ type: 'post' });

  const postIndex = posts.findIndex((post) => post.data.slug === params.slug);

  if (postIndex === -1) {
    return <LayoutPerPage>"POST NOT FOUND"</LayoutPerPage>;
  }

  const prevPost = postIndex === 0 ? null : posts.at(postIndex - 1);

  const nextPost =
    postIndex === posts.length - 1 ? null : posts.at(postIndex + 1);

  const post: ContentData = posts.at(postIndex)!;

  return (
    <LayoutPerPage>
      <PostLayout
        post={post}
        prevPost={prevPost!}
        nextPost={nextPost!}
        type={'post'}
      />
    </LayoutPerPage>
  );
};

export default PostPage;
