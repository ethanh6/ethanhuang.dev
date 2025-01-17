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
      <div className="mt-4 grid grid-cols-1 gap-4 text-gray-700 dark:text-gray-300 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="highlight my-4 text-xl">Full-stack Development</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <span className="">TypeScript</span>
            </li>
            <li>
              <span className="">JavaScript</span>
            </li>
            <li>
              <span className="">Python</span>
            </li>
            <li>
              <span className="">Express.js</span>
            </li>
            <li>
              <span className="">FastAPI</span>
            </li>
            <li>
              <span className="">React.js</span>
            </li>
            <li>
              <span className="">Next.js</span>
            </li>
            <li>
              <span className="">Node.js</span>
            </li>
            <li>
              <span className="">GraphQL Apollo Server</span>
            </li>
            <li>
              <span className="">Prisma ORM</span>
            </li>
            <li>
              <span className="">TailwindCSS</span>{' '}
            </li>
          </ul>
        </div>
        <div>
          <p className="highlight my-4 text-xl">Infra & DevOps</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <span className="">Kubernetes (on-prem)</span>
            </li>
            <li>
              <span className="">Docker Compose</span>
            </li>
            <li>
              <span className="">Prometheus</span>
            </li>
            <li>
              <span className="">Grafana</span>
            </li>
            <li>
              <span className="">ArgoCD</span>{' '}
            </li>
            <li>
              <span className="">DroneCI</span>{' '}
            </li>
            <li>
              <span className="">Rook-Ceph</span>{' '}
            </li>
            <li>
              <span className="">Helm</span>{' '}
            </li>
            <li>
              <span className="">Kustomize</span>{' '}
            </li>
            <li>
              <span className="">Ansible</span>{' '}
            </li>
          </ul>
        </div>
        <div>
          <p className="highlight my-4 text-xl">Cloud</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <span className="">AWS Amplify</span>
            </li>
            <li>
              <span className="">AWS Route 53</span>
            </li>
            <li>
              <span className="">AWS EC2</span>
            </li>
            <li>
              <span className="">Vercel</span>
            </li>
          </ul>
        </div>
        <div>
          <p className="highlight my-4 text-xl">Database</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <span className="">Redis</span>
            </li>
            <li>
              <span className="">MariaDB Galera Cluster</span>
            </li>
            <li>
              <span className="">PostgreSQL</span>
            </li>
            <li>
              <span className="">Cassandra</span>
            </li>
            <li>
              <span className="">Scylla DB</span>
            </li>
            <li>
              <span className="">Kafka</span>
            </li>
            <li>
              <span className="">Microsoft SQL Server</span>
            </li>
            <li>
              <span className="">MongoDB</span>
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Home;
