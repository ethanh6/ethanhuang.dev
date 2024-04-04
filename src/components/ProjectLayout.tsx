import ProjectCard from '@/components/ProjectCard';

export default function ProjectLayout({ projects }) {
  return (
    <div className="divide-y divide-gray-200 pt-6 transition-colors dark:divide-gray-700">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        <div className="flex flex-col justify-start gap-6">
          {projects.map(
            (proj, i) => i % 2 === 0 && <ProjectCard key={i} project={proj} />,
          )}
        </div>
        <div className="flex flex-col justify-start gap-6">
          {projects.map(
            (proj, i) => i % 2 === 1 && <ProjectCard key={i} project={proj} />,
          )}
        </div>
      </div>
    </div>
  );
}
