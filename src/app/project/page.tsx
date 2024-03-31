import Content from '@/components/Content';
import ProjectLayout from '@/components/ProjectLayout';
// import { siteConfigs } from '@/configs/siteConfigs';

import { getProjects } from '@/lib/markdown';

const Home = async () => {
  const projects = await getProjects();

  return <ProjectLayout projects={projects} />;
};

export default Home;
