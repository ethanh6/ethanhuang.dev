import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import { ArticleJsonLd } from 'next-seo';

import {
  getCommandPalettePosts,
  PostForCommandPalette,
} from '@/components/CommandPalette/getCommandPalettePosts';
import { useCommandPalettePostActions } from '@/components/CommandPalette/useCommandPalettePostActions';
import LayoutPerPage from '@/components/LayoutPerPage';
import { siteConfigs } from '@/configs/siteConfigs';
import generateRSS from '@/lib/generateRSS';

import Me from '../../public/images/me.jpg';

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

      <div className="grid grid-cols-2">
        <div className="prose col-span-1 my-12 py-24 transition-colors dark:prose-dark md:prose-lg">
          <h1 className="text-left">I build software.</h1>
        </div>
        <div className="grid grid-rows-3 justify-end">
          <div className="row-start-2 justify-self-end">
            <Image src={Me} height={168} width={140} alt="me" />
          </div>
          <div className="prose row-start-3 my-9 space-y-2 transition-colors dark:prose-dark md:prose-lg md:space-y-4">
            <p className="text-right"> I'm a software engineer. </p>
            <p className="text-right">
              {' '}
              I have experience with Python, C++ and Typescript.{' '}
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
