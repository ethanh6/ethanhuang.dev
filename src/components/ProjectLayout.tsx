import ProjectCard from '@/components/ProjectCard';
import { ProjectData } from '@/data/projectsData';
// import siteMetadata from '@/data/siteMetadata';

export default function ProjectLayout() {
  return (
    <div className="divide-y divide-gray-200 transition-colors dark:divide-gray-700">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        {ProjectData.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </div>
  );
}
