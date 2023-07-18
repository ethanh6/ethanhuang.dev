import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
/* import { useTranslation } from 'next-i18next'; */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArticleJsonLd } from 'next-seo';

import {
  getCommandPalettePosts,
  PostForCommandPalette,
} from '@/components/CommandPalette/getCommandPalettePosts';
import { useCommandPalettePostActions } from '@/components/CommandPalette/useCommandPalettePostActions';
import LayoutPerPage from '@/components/LayoutPerPage';
import PostList, { PostForPostList } from '@/components/PostList';
import { siteConfigs } from '@/configs/siteConfigs';
import { allPostsNewToOld } from '@/lib/contentLayerAdapter';
import generateRSS from '@/lib/generateRSS';

import Content from '@/components/Content';
import Image from 'next/image'

type PostForIndexPage = PostForPostList;

type Props = {
  posts: PostForIndexPage[];
  commandPalettePosts: PostForCommandPalette[];
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  /* const locale = context.locale!; */

  const commandPalettePosts = getCommandPalettePosts();
  const posts = allPostsNewToOld.map((post) => ({
    slug: post.slug,
    date: post.date,
    title: post.title,
    description: post.description,
    path: post.path,
  })) as PostForIndexPage[];

  generateRSS();

  return {
    props: {
      /* ...(await serverSideTranslations(locale, ['indexPage', 'common'])), */
      posts,
      commandPalettePosts,
    },
  };
};

const Home: NextPage<Props> = ({ posts, commandPalettePosts }) => {
  /* const { t } = useTranslation(['indexPage', 'common']); */

  useCommandPalettePostActions(commandPalettePosts);

  return (
    <LayoutPerPage>
      <ArticleJsonLd
        type="Blog"
        url={siteConfigs.fqdn}
        title={siteConfigs.title}
        images={[siteConfigs.bannerUrl]}
        datePublished={siteConfigs.datePublished}
        authorName={siteConfigs.author}
        description={siteConfigs.description}
      />


      <div className="grid grid-rows-3">
        <div className="prose my-12 space-y-2 transition-colors dark:prose-dark md:prose-lg md:space-y-5 justify-self-start">
          <h2 className='text-left'>I build software.</h2>
        </div>
        <div className="prose my-12 space-y-2 transition-colors dark:prose-dark md:prose-lg md:space-y-5 justify-self-end">
          <p className="text-right">I'm a CS graduate at Cornell Tech.</p>
          <p className="text-right">I have experience with Python, C++ and Javascirpt.</p>
          <p className="text-right">I'm actively looking for job opportunities!</p>
        </div>
      </div>

    </LayoutPerPage>
  );
};

export default Home;
