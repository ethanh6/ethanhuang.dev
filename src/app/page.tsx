import Image from 'next/image';
import LayoutPerPage from '@/components/LayoutPerPage';
import Me from '@images/me.jpg';

export default function Home() {
  return (
    <article className="prose dark:prose-dark md:prose-lg prose-p:text-lg my-8 space-y-3 transition-colors md:space-y-5">
      <p className="highlight text-3xl">Hi!</p>
      <p className="">I'm Ethan, welcome to my website.</p>
      <p className="">
        {' '}
        I’m a <span className="highlight">Software Engineer</span> specializing
        in building scalable <span className="highlight"> full-stack </span>
        applications and managing reliable{' '}
        <span className="highlight">infrastructure</span>. I focus on designing
        efficient systems that solve real-world challenges and drive operational
        success.{' '}
      </p>
      <p className="">
        {' '}
        With expertise in TypeScript, React.js, Next.js, Express.js, GraphQL,
        Kubernetes, Docker, and ArgoCD, I deliver robust, innovative solutions
        that tackle complex challenges while ensuring reliability and
        scalability.{' '}
      </p>
      <p className="highlight"> I'm currently looking for new career opportunities! </p>

      <p className="">
        Feel free to reach out to me on{' '}
        <a
          href="https://www.linkedin.com/in/ethanhuang0606/"
          className="highlight-link"
        >
          LinkedIn
        </a>{' '}
        and check out my{' '}
        <a href="https://github.com/ethanh6" className="highlight-link">
          GitHub
        </a>{' '}
        and{' '}
        <a href="/resume" className="highlight-link">
          Resume
        </a>
        .
      </p>

      <p className="">
        See{' '}
        <a href="/about" className="highlight-link">
          more about me
        </a>
        ,{' '}my{' '}
        <a href="/skill" className="highlight-link">
          skills
        </a>
        ,{' '}
        <a href="/project" className="highlight-link">
          projects
        </a>
        {''} and{' '}
        <a href="/post" className="highlight-link">
          posts
        </a>
        .
      </p>
    </article>
  );
}
