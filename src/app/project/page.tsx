import { getProjects } from '@/lib/markdown';
import ProjectCard from '@/components/ProjectCard';

import type { NextPage, Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project',
};

function ProjectLayout({ projects }) {
  return (
    <div className="divide-y divide-dotted divide-gray-300 dark:divide-gray-600">
      {projects.map((proj, i) => (
        <ProjectCard key={i} project={proj} />
      ))}
    </div>
  );
}

const Home = async () => {
  const projects = await getProjects();
  projects.sort((a, b) => a.order - b.order);

  return <ProjectLayout projects={projects} />;
};

export default Home;
