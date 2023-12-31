import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { ArticleJsonLd } from 'next-seo';

import {
  getCommandPalettePosts,
  PostForCommandPalette,
} from '@/components/CommandPalette/getCommandPalettePosts';
import { useCommandPalettePostActions } from '@/components/CommandPalette/useCommandPalettePostActions';
import Content from '@/components/Content';
import LayoutPerPage from '@/components/LayoutPerPage';
import { siteConfigs } from '@/configs/siteConfigs';
import generateRSS from '@/lib/generateRSS';

type Props = {
  commandPalettePosts: PostForCommandPalette[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const commandPalettePosts = getCommandPalettePosts();
  generateRSS();
  return {
    props: {
      commandPalettePosts,
    },
  };
};

const Home: NextPage<Props> = ({ commandPalettePosts }) => {
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

      <Content title={'about'}>
        <article className="prose my-8 space-y-3 transition-colors dark:prose-dark md:prose-lg prose-p:text-lg md:space-y-5">
          <h4> Hey there! </h4>
          <p> I'm Ethan Huang. Welcome to my personal website.</p>
          <p>
            I recently graduated from Cornell Tech with a master&apos;s degree in
            Computer Science. I also studied CS at UC San Diego during my
            undergrad.
          </p>
          <p>
            I grew up in Taipei, lived in San Diego and New York City, and I'm
            currently based in the Bay Area, California.
          </p>
          <p>
            {' '}
            I'm interested in full-stack development and finance. I also play
            basketball, listen to music, and make coffee.{' '}
          </p>
          <h4>I'm actively looking for SWE roles in the United States!</h4>
          <p>
            Feel free to reach out to me on{' '}
            <a href="https://www.linkedin.com/in/ethanhuang0606/">LinkedIn</a>{' '}
            and check out my <a href="https://github.com/ethanh6">GitHub</a>.
          </p>
        </article>
      </Content>
    </LayoutPerPage>
  );
};

export default Home;
