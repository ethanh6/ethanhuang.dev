import ProjectLayout from '@/components/ProjectLayout';

import { getFilesByContentType, getContentByFileName } from '@/lib/github';

import type { NextPage, Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project',
};

const Home = async () => {
  const files = await getFilesByContentType({
    contentType: 'project',
  });

  let projects = [];

  for (const file of files) {
    const { content, metadata } = await getContentByFileName({
      contentType: 'project',
      file,
    });
    projects.push({ ...metadata });
  }

  projects.sort((a, b) => a.order - b.order);

  return <ProjectLayout projects={projects} />;
};

export default Home;
