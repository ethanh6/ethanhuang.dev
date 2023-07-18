import Me from '@image/me.jpg';
import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Image from 'next/image';
/* import { useTranslation } from 'next-i18next'; */
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ArticleJsonLd } from 'next-seo';

import {
  getCommandPalettePosts,
  PostForCommandPalette,
} from '@/components/CommandPalette/getCommandPalettePosts';
import { useCommandPalettePostActions } from '@/components/CommandPalette/useCommandPalettePostActions';
import Content from '@/components/Content';
import LayoutPerPage from '@/components/LayoutPerPage';
import PostList, { PostForPostList } from '@/components/PostList';
import { siteConfigs } from '@/configs/siteConfigs';
import { allPostsNewToOld } from '@/lib/contentLayerAdapter';
import generateRSS from '@/lib/generateRSS';

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

      <div className="grid grid-cols-2">
        <div className="prose col-span-1 my-12 py-24 transition-colors dark:prose-dark md:prose-lg">
          <h1 className="text-left">I build software.</h1>
        </div>
        <div className="flex grid grid-rows-3 flex-col justify-end">
          <div className="row-start-2 justify-self-end">
            <Image src="/images/me.jpg" height={168} width={140} alt="me" />
          </div>
          <div className="prose-p:text-1xl prose row-start-3 my-9 space-y-2 transition-colors dark:prose-dark md:prose-lg md:space-y-4">
            <p className="text-right"> I'm a CS graduate at Cornell Tech. </p>
            <p className="text-right">
              {' '}
              I have experience with Python, C++ and Javascirpt.{' '}
            </p>
            <p className="text-right">
              {' '}
              I'm actively looking for job opportunities!{' '}
            </p>
          </div>
        </div>
      </div>
    </LayoutPerPage>
  );
};

export default Home;
