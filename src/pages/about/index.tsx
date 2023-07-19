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
          <h4>Hey there!</h4>
          <p>I'm Ethan Huang. I'm a software engineer.</p>
          <p>
            I'm interesed in full-stack development, blockchain and finance. I also play basketball, listen to musics and make coffee.
          </p>
          <p>In this website, you can find my projects, thoughts, learning notes and development experiences.</p>
          <p>
            I studied Computer Science at Cornell Tech and UC San Diego. I grew
            up in Taipei, Taiwan, lived in San Diego and New York, and I'm currently
            based in Bay Area, California.
          </p>
          <h4>Let's connect!</h4>
          <ul>
            <li><a href="https://github.com/ethanh6">Github6</a></li>
            <li><a href="https://www.linkedin.com/in/ethanhuang0606">LinkedIn</a></li>
            <li><a href="https://drive.google.com/drive/u/2/folders/1p-4_N_GU0uh1phP8hYd2UWgFyH9VGFWy">Resume</a></li>
          </ul>
        </article>
      </Content>
    </LayoutPerPage>
  );
};

export default Home;
