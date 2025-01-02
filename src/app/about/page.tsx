import type { NextPage, Metadata } from 'next';
import { ArticleJsonLd } from 'next-seo';
import { siteConfigs } from '@/configs/siteConfigs';

export const metadata: Metadata = {
  title: 'About',
};

type Props = {};

const Home: NextPage<Props> = () => {
  return (
    <article className="prose dark:prose-dark md:prose-lg prose-p:text-lg my-8 space-y-3 transition-colors md:space-y-5">
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
        I focus on <span className="highlight">full-stack development</span> and{' '}
        <span className="highlight">infrastructure automation</span>.
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
          <span className="highlight">Learning</span>. I learn cool things
          across psychology, philosophy, and science.
        </li>
        <li>
          <span className="highlight">Full-stack development</span>. Details in
          the{' '}
          <a href="/skill" className="highlight">
            skill
          </a>{' '}
          page.
        </li>
        <li>
          <span className="highlight">Neovim</span>. Many years ago I started
          coding in Neovim, and I have never stopped loving it.
        </li>
        <li>
          <span className="highlight">Blockchain</span>. DeFi and DEX.
        </li>
        <li>
          <span className="highlight">Investing</span>. Surfing with the market
          is fun.
        </li>
        <li>
          <span className="highlight">Basketball</span>. Still sharpening my
          jump shots.
        </li>
        <li>
          <span className="highlight">Music</span>. Polyphia, Dream Theater,
          GorDoN and Jay Chou.
        </li>
        <li>
          <span className="highlight">Philosophy</span>. Stoicism.
        </li>
        <li>
          <span className="highlight">Coffee</span>. My morning coffee routine
          is a experiment with the fantastic roasters in SF.{' '}
        </li>
        <li>
          <span className="highlight">My cats!</span>
        </li>
      </ul>
    </article>
  );
};

export default Home;
