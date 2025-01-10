import type { NextPage, Metadata } from 'next';
import { ArticleJsonLd } from 'next-seo';
import { siteConfigs } from '@/configs/siteConfigs';

export const metadata: Metadata = {
  title: 'About',
};

type Props = {};

const Home: NextPage<Props> = () => {
  return (
    <article className="prose dark:prose-dark md:prose-lg prose-p:text-lg my-8 transition-colors md:space-y-5">
      <div className="flex items-center justify-end text-right text-gray-700 dark:text-gray-300">
        <a
          href="/files/Resume-Ethan-Huang.pdf"
          download="EthanHuangResume.pdf"
          className="cursor-pointer rounded-lg border-2 border-gray-700 px-4 py-2 font-semibold text-gray-700 transition-colors hover:text-black focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-gray-300"
        >
          Download Resume
        </a>
      </div>

      <div className="flex flex-col">
        <div className="highlight text-center text-3xl">
          Professional Experience
        </div>
        <div className="">
          <div className="highlight mt-5 text-2xl">
            Software Engineer @ Supermicro
          </div>
          <div className="">Nov. 2023 - Current</div>
          <div className="">San Jose, CA</div>
          <div className="my-4 text-xl italic">Full Stack Development</div>
          <ul className="list-inside list-disc pl-5">
            <li className="leading-loose">
              Develop mission-critical internal applications, such as firmware
              flashing, inventory, and BOM management, using TypeScript, React,
              Express, and databases like MSSQL, MariaDB, MySQL, Cassandra and
              ScyllaDB.
            </li>
            <li className="leading-loose">
              Reduce operational overhead by 30% on the global production lines
              by implementing user-requested features.
            </li>
            <li className="leading-loose">
              Refactor legacy code, reducing codebase complexity and increased
              test coverage to over 95% using Jest.
            </li>
            <li className="leading-loose">
              Improve SQL query performance by 80% through GraphQL with Apollo
              Server, optimize batch processing, streamline data fetching and
              boost API efficiency.
            </li>
            <li className="leading-loose">
              Enhance distributed system stability by implementing multi-cluster
              data synchronization, database migration, backup, and disaster
              recovery with Rook-Ceph, Syncthing, and MariaDB Galera,
              significantly reducing downtime.
            </li>
          </ul>
          <div className="my-4 text-xl italic">DevOps and Infrastructure</div>
          <ul className="list-inside list-disc pl-5">
            <li className="leading-loose">
              Bootstrap and manage 10+ highly available, multi-region
              on-premises Kubernetes clusters, automating bare-metal hardware
              provisioning with Ansible and ensuring network reliability with
              HAProxy, Kube-VIP and Nginx.
            </li>
            <li className="leading-loose">
              Independently design and establish CI/CD pipelines with DroneCI,
              ArgoCD, Helm, and Kustomize, deploying 20+ applications across 10+
              Kubernetes clusters in multiple environments, significantly
              cutting deployment time and overhead.
            </li>
            <li className="leading-loose">
              Reinforce data availability with Rook-Ceph for distributed storage
              and improve observability with Prometheus and Grafana.
            </li>
            <li className="leading-loose">
              Construct multi-purpose development environments with Docker
              Compose and Virtual Machines, cutting setup time by 60% and image
              sizes by 80%, boosting efficiency and resource utilization.
            </li>
            <li className="leading-loose">
              Participate in on-call rotation, troubleshooting and resolving
              critical issues rapidly to minimize system downtime by 90%.
            </li>
          </ul>

          <hr className="my-4 border-gray-300 dark:border-gray-600" />

          <div className="highlight mt-5 text-2xl">
            Software Engineer @ NavisX
          </div>
          <div className="">Mar. 2023 - Oct. 2023</div>
          <div className="">Remote</div>
          <div className="my-4 text-xl italic">Full Stack Development</div>
          <ul className="list-inside list-disc pl-5">
            <li className="leading-loose">
              Developed web applications with 20+ custom React components using
              Next.js 13, TailwindCSS, Typescript and Zustand.
            </li>
            <li className="leading-loose">
              Led the technical team at an early-stage startup, driving market
              research and product strategy in a fast-paced environment.
            </li>
          </ul>
          <hr className="my-4 border-gray-300 dark:border-gray-600" />
        </div>
      </div>
    </article>
  );
};

export default Home;