import { getProjects } from '@/lib/markdown';
import ProjectCard from '@/components/ProjectCard';
import type { NextPage, Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project',
};

function ProjectLayout({ projects }) {
  return (
    <div className="my-8">
      <div className="mb-12 text-center">
        <h1 className="highlight text-4xl font-bold">Projects</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          A collection of my work and experiments
        </p>
      </div>
      
      <div className="grid gap-12">
        {projects.map((proj, i) => (
          <a
            key={i}
            href={`/project/${proj.slug}`}
            className="group block rounded-lg border border-gray-200 p-6 transition-all hover:border-gray-300 hover:bg-gray-50/50 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-800/50"
          >
            <ProjectCard project={proj} />
          </a>
        ))}
      </div>
    </div>
  );
}

const Home = async () => {
  const projects = await getProjects();
  projects.sort((a, b) => a.order - b.order);

  return <ProjectLayout projects={projects} />;
};

export default Home;
