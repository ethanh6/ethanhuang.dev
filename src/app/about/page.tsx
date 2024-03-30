import type { NextPage } from 'next';
import { ArticleJsonLd } from 'next-seo';

import Content from '@/components/Content';
import LayoutPerPage from '@/components/LayoutPerPage';
import { siteConfigs } from '@/configs/siteConfigs';

type Props = {};

const Home: NextPage<Props> = () => {
  return (
    <Content>
      <article className="prose dark:prose-dark md:prose-lg prose-p:text-lg my-8 space-y-3 transition-colors md:space-y-5">
        <h4> Hey there! </h4>
        <p> I'm Ethan Huang. Welcome to my personal website.</p>
        <p>
          I recently graduated from Cornell Tech with a master&apos;s degree in
          Computer Science. I also studied CS at UC San Diego during my
          undergrad.
        </p>
        <p>
          I grew up in Taipei, lived in San Diego and New York City, and I'm
          currently based in the Bay Area, California.
        </p>
        <p>
          {' '}
          I'm interested in full-stack development and finance. I also play
          basketball, listen to music, and make coffee.{' '}
        </p>
        <h4>I'm actively looking for SWE roles in the United States!</h4>
        <p>
          Feel free to reach out to me on{' '}
          <a href="https://www.linkedin.com/in/ethanhuang0606/">LinkedIn</a> and
          check out my <a href="https://github.com/ethanh6">GitHub</a>.
        </p>
      </article>
    </Content>
  );
};

export default Home;
