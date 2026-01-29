import { getProjects } from '@/lib/markdown';
import ProjectCard from '@/components/ProjectCard';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
};

export default async function ProjectsPage() {
  const projects = await getProjects();
  projects.sort((a, b) => a.order - b.order);

  return (
    <article className="my-8 space-y-8 transition-colors">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6 dark:border-gray-700">
        <h1 className="text-2xl font-bold">Projects</h1>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          A collection of my work and experiments.
        </p>
      </div>

      {/* Project List */}
      <section className="space-y-6">
        {projects.map((proj, i) => (
          <a
            key={i}
            href={`/project/${proj.slug}`}
            className="group block rounded-lg border border-gray-200 p-6 transition-all hover:border-gray-300 hover:bg-gray-50/50 dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-800/50"
          >
            <ProjectCard project={proj} />
          </a>
        ))}
      </section>
    </article>
  );
}
