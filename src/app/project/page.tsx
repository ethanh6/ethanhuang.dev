import Content from '@/components/Content';
import ProjectLayout from '@/components/ProjectLayout';
// import { siteConfigs } from '@/configs/siteConfigs';

import { getProjects } from '@/lib/markdown';

const Home = async () => {
  const projects = await getProjects();

  return (
    <Content title={'project'}>
      <ProjectLayout projects={projects} />
    </Content>
  );
};

export default Home;
