import LayoutPerPage from '@/components/LayoutPerPage';
import Me from '@images/me.jpg';

export default function Home() {
  return (
    <article className="my-8 space-y-3 transition-colors md:space-y-5">
      <p className="highlight text-2xl">Hi!</p>
      <p className="text-xl">I'm Ethan, welcome to my website.</p>
      <p className="">
        {' '}
        I'm a <span className="highlight">Software Engineer</span> and{' '}
        <span className="highlight">SRE</span> specializing in building reliable{' '}
        <span className="highlight">infrastructure</span> and scalable{' '}
        <span className="highlight">distributed systems</span>. I focus on
        designing efficient systems that solve real-world challenges and drive
        operational success.{' '}
      </p>
      <p className="">
        {' '}
        With expertise in Go, Kubernetes, ArgoCD, Prometheus, and GitOps, I
        build and maintain production infrastructure serving millions of users
        while ensuring reliability and scalability.{' '}
      </p>

      <p className="highlight">
        {' '}
        I'm currently looking for new career opportunities!{' '}
      </p>

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
    </article>
  );
}
