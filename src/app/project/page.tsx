import ProjectLayout from '@/components/ProjectLayout';
// import { siteConfigs } from '@/configs/siteConfigs';

import { getProjects } from '@/lib/markdown';

import type { NextPage, Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project',
};

const Home = async () => {
  const projects = await getProjects();
  projects.sort((a, b) => a.order - b.order);

  return <ProjectLayout projects={projects} />;
};

export default Home;
