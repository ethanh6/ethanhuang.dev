import type { NextPage, Metadata } from 'next';
import CustomLink from '@/components/CustomLink';

export const metadata: Metadata = {
  title: 'About',
};

type Props = {};

const Home: NextPage<Props> = () => {
  return (
    <article className="my-8 space-y-8 transition-colors">
      {/* Header */}
      <div className="border-b border-gray-200 pb-6 dark:border-gray-700">
        <h1 className="text-2xl font-bold">About</h1>
        <p className="mt-1 text-gray-500 dark:text-gray-400">Get to know me.</p>
      </div>

      {/* About Me */}
      <section className="space-y-6">
        <div className="space-y-4 dark:border-gray-600">
          <p>
            Hey there, my name is
            <span className="highlight"> Ethan Huang (黃毅)</span>. Thanks for
            visiting!
          </p>
          <p>
            I'm currently based in the San Francisco Bay Area, and I've worked
            as <span className="highlight">Software Engineer</span> at{' '}
            <span className="highlight">SpaceX (Starlink)</span> and{' '}
            <span className="highlight">Supermicro</span>, focusing on{' '}
            <span className="highlight">infrastructure</span>,{' '}
            <span className="highlight">SRE</span> and{' '}
            <span className="highlight">DevOps</span> as well as{' '}
            <span className="highlight">full-stack development</span>.
          </p>
          <p>
            Previously, I graduated from{' '}
            <span className="highlight">Cornell Tech</span> with a master&apos;s
            degree in Computer Science and completed my undergrad studies in CS
            at <span className="highlight">UC San Diego</span>.
          </p>
          <p>
            I grew up in Taipei, Taiwan and have lived in San Diego, CA and New
            York, NY.
          </p>
        </div>
      </section>

      {/* Interests */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Interests</h2>

        <div className="space-y-4 border-l-2 border-gray-300 pl-6 dark:border-gray-600">
          <ul className="list-disc space-y-3 pl-5 text-gray-700 dark:text-gray-300">
            <li>
              <span className="highlight">Software Development</span> - Full
              Stack and DevOps. See more in the{' '}
              <a href="/resume" className="highlight-link">
                resume
              </a>{' '}
              page.
            </li>
            <li>
              <span className="highlight">Learning</span> - I learn things
              across psychology and science.
            </li>
            <li>
              <span className="highlight">Neovim</span> - Many years ago I
              started coding in Neovim, and I have never stopped loving it.
            </li>
            <li>
              <span className="highlight">Basketball</span> - Still sharpening
              my jump shots.
            </li>
            <li>
              <span className="highlight">Coffee</span> - My morning coffee
              routine is an experiment with the fantastic roasters in SF.
            </li>
            <li>
              <span className="highlight">My cats!</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Contact */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Contact</h2>

        <div className="space-y-4 border-l-2 border-gray-300 pl-6 dark:border-gray-600">
          <p>
            If you'd like to get in touch, shoot me a message on{' '}
            <span className="highlight-link">ethan at ethanhuang dot dev</span>.
          </p>
          <p>
            You can also find me on{' '}
            <CustomLink
              href="https://github.com/ethanh6"
              className="highlight-link"
            >
              Github
            </CustomLink>
            ,{' '}
            <CustomLink
              href="https://www.linkedin.com/in/ethanhuang0606"
              className="highlight-link"
            >
              Linkedin
            </CustomLink>
            .
          </p>
          <p>Thanks!</p>
        </div>
      </section>
    </article>
  );
};

export default Home;
