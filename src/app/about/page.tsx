import type { NextPage, Metadata } from 'next';
import { ArticleJsonLd } from 'next-seo';
import { siteConfigs } from '@/configs/siteConfigs';
import CustomLink from '@/components/CustomLink';

export const metadata: Metadata = {
  title: 'About',
};

type Props = {};

const Home: NextPage<Props> = () => {
  return (
    <article className="prose dark:prose-dark md:prose-lg prose-p:text-lg my-8 transition-colors">
      <div className="space-y-3 md:space-y-5">
        <p>
          {' '}
          Hey there, my name is
          <span className="highlight"> Ethan Huang (黃毅)</span>. Thanks for
          visiting!{' '}
        </p>
        <p>
          {' '}
          I’m currently based in the San Francisco Bay Area. I work as a{' '}
          <span className="highlight">Software Engineer</span> at{' '}
          <span className="highlight">Supermicro</span>.
        </p>
        <p>
          I focus on <span className="highlight">full-stack development</span>,{' '}
          <span className="highlight">infrastructure</span>,{' '}
          and <span className="highlight">DevOps</span>.
        </p>
        <p>
          Previously, I graduated from{' '}
          <span className="highlight">Cornell Tech</span> with a master&apos;s
          degree in Computer Science and completed my undergrad studies in CS at{' '}
          <span className="highlight">UC San Diego</span>.
        </p>
        <p>
          I grew up in Taipei, Taiwan and have lived in San Diego, CA and New
          York, NY.
        </p>
        <p>I care about:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <span className="highlight">Software Development</span>. Full Stack and DevOps. See more
            in the{' '}
            <a href="/skill" className="highlight-link">
              skill
            </a>{' '}
            and{' '}
            <a href="/resume" className="highlight-link">
              resume
            </a>{' '}

            page.
          </li>
          <li>
            <span className="highlight">Learning</span>. I learn things
            across psychology and science.
          </li>
          <li>
            <span className="highlight">Neovim</span>. Many years ago I started
            coding in Neovim, and I have never stopped loving it.
          </li>
          <li>
            <span className="highlight">Basketball</span>. Still sharpening my
            jump shots.
          </li>
          <li>
            <span className="highlight">Coffee</span>. My morning coffee routine
            is a experiment with the fantastic roasters in SF.{' '}
          </li>
          <li>
            <span className="highlight">My cats!</span>
          </li>
        </ul>
      </div>

      <div className="mt-12 space-y-3 md:space-y-5">
        <p className="highlight">Contact:</p>
        <p className="">
          If you'd like to get in touch, shoot me a message on <span className="highlight-link">ethanhuang0606 at gmail dot com</span>.{' '}
        </p>
        <p>
          You can also find me on{' '}
          <CustomLink href="https://github.com/ethanh6" className="highlight-link">Github</CustomLink>,{' '}
          <CustomLink href="https://www.linkedin.com/in/ethanhuang0606" className="highlight-link">Linkedin</CustomLink>.
        </p>
        <p> Thanks! </p>
      </div>
    </article>
  );
};

export default Home;
