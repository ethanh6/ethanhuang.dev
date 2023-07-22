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
import ProjectLayout from '@/components/ProjectLayout';
import { siteConfigs } from '@/configs/siteConfigs';
import { allProjects, Project } from '@/lib/contentLayerAdapter';
import generateRSS from '@/lib/generateRSS';

export type ProjectTypeForIndexPage = {
  date: string;
  description: string;
  path: string;
  slug: string;
  title: string;
  imgAlt: string;
  imgSrc: string;
};

type Props = {
  projects: Project[];
  commandPalettePosts: PostForCommandPalette[];
};

export const getStaticProps: GetStaticProps<Props> = () => {
  const commandPalettePosts = getCommandPalettePosts();
  const projects = allProjects;
  generateRSS();

  return {
    props: {
      projects,
      commandPalettePosts,
    },
  };
};

const Home: NextPage<Props> = ({ projects, commandPalettePosts }) => {
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

      <Content title={'project'}>
        <ProjectLayout projects={projects} />
      </Content>
    </LayoutPerPage>
  );
};

export default Home;
