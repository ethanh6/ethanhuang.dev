import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { ArticleJsonLd, NextSeo } from 'next-seo';
import { ParsedUrlQuery } from 'querystring';

import LayoutPerPage from '@/components/LayoutPerPage';
import { siteConfigs } from '@/configs/siteConfigs';

import readContent from '@/lib/markdown';
import { loadProjectInfo } from 'next/dist/build/webpack-config';
import PostLayout from '@/components/PostLayout';

export function generateStaticParams() {
  const projects: ContentData[] = readContent({ type: 'project' });

  return projects.map((project) => ({
    slug: project.data.slug,
  }));
}

const ProjectPage = ({ params }: { params: { slug: string } }) => {
  const projects: ContentData[] = readContent({ type: 'project' });
  const projectIndex = projects.findIndex(
    (project) => project.data.slug === params.slug,
  );

  if (projectIndex === -1) {
    return <LayoutPerPage>"PROJECT NOT FOUND"</LayoutPerPage>;
  }

  const prevProject = projectIndex === 0 ? null : projects.at(projectIndex - 1);

  const nextProject =
    projectIndex === projects.length - 1 ? null : projects.at(projectIndex + 1);

  const project: ContentData = projects.at(projectIndex)!;

  return (
    <LayoutPerPage>
      <PostLayout
        post={project}
        nextPost={nextProject!}
        prevPost={prevProject!}
        type={'project'}
      />
    </LayoutPerPage>
  );
};

export default ProjectPage;
