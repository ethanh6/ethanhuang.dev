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
      <p className="">Full-stack development:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <span className="highlight">My cats!</span>
        </li>
      </ul>
      <section className="mt-8">
        <h5 className="text-2xl font-bold text-indigo-600">Skills</h5>
        <ul className="mt-4 grid grid-cols-3 gap-4 text-gray-700 dark:text-gray-300">
          <li>TypeScript</li>
          <li>Express</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Kubernetes</li>
          <li>Docker</li>
          <li>GraphQL</li>
          <li>Prisma</li>
          <li>CI/CD Pipelines</li>
          <li>MariaDB</li>
          <li>PostgreSQL</li>
          <li>Cassandra</li>
          <li>Prometheus</li>
        </ul>
      </section>
    </article>
  );
};

export default Home;
