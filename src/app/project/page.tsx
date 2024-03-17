import type { NextPage } from 'next';

import Content from '@/components/Content';
import LayoutPerPage from '@/components/LayoutPerPage';
import ProjectLayout from '@/components/ProjectLayout';
import { siteConfigs } from '@/configs/siteConfigs';

import readContent from '@/lib/markdown';

const Home = () => {
  const projects_content: ContentData[] = readContent({ type: 'project' });

  return (
    <LayoutPerPage>
      <Content title={'project'}>
        <ProjectLayout projects={projects_content} />
      </Content>
    </LayoutPerPage>
  );
};

export default Home;
