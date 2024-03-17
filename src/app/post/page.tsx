import type { NextPage } from 'next';
import { GetStaticProps } from 'next';

import Content from '@/components/Content';
import LayoutPerPage from '@/components/LayoutPerPage';
import PostList, { PostForPostList } from '@/components/PostList';
import { siteConfigs } from '@/configs/siteConfigs';

import readContent from '@/lib/markdown';

const Home = () => {
  const posts_content: ContentData[] = readContent({ type: 'post' });

  return (
    <LayoutPerPage>
      <Content title={'post'}>
        <PostList posts={posts_content} />
      </Content>
    </LayoutPerPage>
  );
};

export default Home;
