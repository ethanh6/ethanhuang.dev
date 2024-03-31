import Content from '@/components/Content';
import LayoutPerPage from '@/components/LayoutPerPage';
import PostList from '@/components/PostList';

import { getPosts } from '@/lib/markdown';

const Home = async () => {
  const posts = await getPosts();

  return <PostList posts={posts} />;
};

export default Home;
