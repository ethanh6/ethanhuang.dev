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
import Content from '@/components/Content';
import LayoutPerPage from '@/components/LayoutPerPage';
import PostList, { PostForPostList } from '@/components/PostList';
import { siteConfigs } from '@/configs/siteConfigs';
import { allPostsNewToOld } from '@/lib/contentLayerAdapter';
import generateRSS from '@/lib/generateRSS';

type PostForIndexPage = PostForPostList;
import clsx from 'clsx';

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

      <Content>
        <article className="prose my-12 space-y-3 transition-colors dark:prose-dark md:prose-lg prose-p:text-lg md:space-y-5">
          <h2 className="text-right">about</h2>
          <p>Hey there, this is Ethan Huang. I'm a software engineer.</p>
          <p>
            I studied Computer Science at Cornell Tech and UC San Diego. I grew
            up in Taipei, lived in San Diego and New York, and I'm currently
            based in Bay Area, California.
          </p>
          <p>
            Programming interests me, that is, full-stack development,
            blockchain development and finance.
          </p>
          <p>I also play basketball, listen to musics and make coffee.</p>
        </article>
      </Content>
    </LayoutPerPage>
  );
};

export default Home;
