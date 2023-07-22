import ProjectCard from '@/components/ProjectCard';
import { Project } from '@/lib/contentLayerAdapter';

type Props = {
  projects: Project[];
};

export default function ProjectLayout({ projects = [] }: Props) {
  return (
    <div className="divide-y divide-gray-200 transition-colors dark:divide-gray-700">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {projects.map((proj) => (
          <ProjectCard key={proj.slug} project={proj} />
        ))}
      </div>
    </div>
  );
}
