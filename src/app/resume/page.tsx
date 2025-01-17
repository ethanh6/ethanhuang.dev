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
          <ul className="list-disc space-y-3 pl-5">
            <li className="padding-left: 1.25rem; text-indent: -1.25rem;">
              Develop and optimize 10+ mission-critical services using
              TypeScript, React, Express, GraphQL Apollo, and RESTful APIs
              within a distributed system architecture, delivering robust,
              scalable, and user-friendly applications.
            </li>
            <li className="padding-left: 1.25rem; text-indent: -1.25rem;">
              Manage and optimize databases including MariaDB, MSSQL, Cassandra,
              and ScyllaDB, and maintain event-driven communication with Kafka,
              ensuring seamless integration and high performance across
              distributed system components.
            </li>
            <li className="padding-left: 1.25rem; text-indent: -1.25rem;">
              Reduce operational overhead by 50% on the global production lines
              by delivering custom features and hot fixes.
            </li>
            <li className="padding-left: 1.25rem; text-indent: -1.25rem;">
              Refactor legacy codebases, increasing test coverage to 97%+ with
              Jest, significantly improving code maintainability and
              reliability.
            </li>
            <li className="padding-left: 1.25rem; text-indent: -1.25rem;">
              Boost GraphQL performance by 95%, optimizing data fetching and
              reducing latency for better user experiences.{' '}
            </li>
            <li className="padding-left: 1.25rem; text-indent: -1.25rem;">
              Orchestrate multi-cluster data operations, including
              synchronizations, migrations, and disaster recovery for 2 TB of
              data using Rook-Ceph, MariaDB-Galera, and Bash scripting, ensuring
              high availability and resilience.
            </li>
          </ul>
          <div className="my-4 text-xl italic">DevOps and Infrastructure</div>
          <ul className="list-disc space-y-3 pl-5">
            <li className="padding-left: 1.25rem; text-indent: -1.25rem;">
              Bootstrap and manage 20+ highly available, multi-region
              on-premises Kubernetes clusters, automating bare-metal
              provisioning with Ansible and ensuring network reliability with
              HAProxy, Kube-VIP and Nginx.
            </li>
            <li className="padding-left: 1.25rem; text-indent: -1.25rem;">
              Spearhead the adoption of ArgoCD and GitOps as the project owner,
              leading its implementation and optimization to manage 10+
              applications across 20+ Kubernetes clusters, improving deployment
              efficiency by 90%.
            </li>
            <li className="padding-left: 1.25rem; text-indent: -1.25rem;">
              Design and establish CI/CD pipelines with ArgoCD, DroneCI, Helm,
              and Kustomize, enhancing maintainability, scalability, and
              developer productivity by 50%, while showcasing deep expertise in
              Kubernetes and its ecosystem.
            </li>
            <li className="padding-left: 1.25rem; text-indent: -1.25rem;">
              Enhance system observability by configuring Prometheus for metric
              collection and Grafana for visualization.
            </li>
            <li className="padding-left: 1.25rem; text-indent: -1.25rem;">
              Construct multi-purpose containerized environments with Docker
              Compose, reducing setup time by 60% and optimizing image sizes by
              80%, significantly boosting efficiency and resource utilization.
            </li>
            <li className="padding-left: 1.25rem; text-indent: -1.25rem;">
              Mentor team members on GitOps best practices, fostering
              collaboration and technical excellence.
            </li>
          </ul>

          <div className="highlight mt-12 text-2xl">
            Software Engineer @ NavisX (Startup)
          </div>
          <div className="">Mar. 2023 - Oct. 2023</div>
          <div className="">Remote</div>
          <div className="my-4 text-xl italic">Full Stack Development</div>
          <ul className="list-disc pl-5">
            <li className="padding-left: 1.25rem; text-indent: -1.25rem;">
              Developed a web application with 20+ custom React components, with
              Next.js 13, TailwindCSS, Typescript and Zustand.
            </li>
            <li className="padding-left: 1.25rem; text-indent: -1.25rem;">
              Led the technical team at an early-stage startup, driving rapid
              product iterations in a dynamic environment.
            </li>
          </ul>
        </div>

        <div className="my-12" />

        <div className="highlight text-center text-3xl">Education</div>
        <div className="highlight mt-5 text-2xl">
          Cornell Tech, Cornell University
        </div>
        <div className="">Master of Engineering in Computer Science, 2022</div>
        <div className="">New York, NY</div>

        <div className="highlight mt-12 text-2xl">
          University of California - San Diego
        </div>
        <div className="">Bachelor of Science in Computer Science, 2021</div>
        <div className="">La Jolla, CA</div>
      </div>
    </article>
  );
};

export default Home;
