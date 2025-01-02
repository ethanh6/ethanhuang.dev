import Image from 'next/image';
import LayoutPerPage from '@/components/LayoutPerPage';
import Me from '@images/me.jpg';

export default function Home() {
  return (
    <article className="prose dark:prose-dark md:prose-lg prose-p:text-lg my-8 space-y-3 transition-colors md:space-y-5">
      <p className="text-3xl font-bold text-indigo-600">Hi!</p>
      <p className="">I'm Ethan, welcome to my website.</p>
      <p className="">
        {' '}
        I’m a <span className="highlight">Software Engineer</span> with 1.5 years of experience, specializing in
        building scalable <span className="highlight">{' '}full-stack{' '}</span>applications and managing reliable infrastructure. I
        focus on designing efficient systems that solve real-world challenges
        and drive operational success.{' '}
      </p>
      <p className="">
        {' '}
        With expertise in TypeScript, React.js, Next.js, Express.js, GraphQL, Kubernetes,
        Docker, and ArgoCD, I deliver robust, innovative solutions that tackle
        complex challenges while ensuring reliability and scalability.{' '}
      </p>
      <p className="highlight"> I'm currently looking for new opportunities! </p>

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
        </a>
        .
      </p>

      <p className="">
        See{' '}
        <a href="/about" className="highlight-link">
          more about me
        </a>
        ,{' '}
        <a href="/skill" className="highlight-link">
          my skills
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
