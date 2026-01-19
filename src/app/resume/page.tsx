import type { NextPage, Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
};

type Props = {};

const Home: NextPage<Props> = () => {
  return (
    <article className="my-8 space-y-8 transition-colors">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-200 pb-6 dark:border-gray-700">
        <div>
          <h1 className="text-2xl font-bold">Resume</h1>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            Software Engineer
          </p>
        </div>
        <a
          href="/files/Resume-Ethan-Huang.pdf"
          download="EthanHuangResume.pdf"
          className="group flex items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-sm font-bold text-white transition-all hover:bg-gray-700 dark:bg-gray-200 dark:text-[#cc7c5e] dark:hover:bg-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            />
          </svg>
          Download PDF
        </a>
      </div>

      {/* Experience */}
      <section className="space-y-8">
        {/* Supermicro */}
        <div className="space-y-3">
          <div>
            <h3 className="text-2xl font-bold">
              Software Engineer @ Supermicro
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Nov. 2023 - Present · San Jose, CA
            </p>
          </div>

          {/* Keywords */}
          <div className="flex flex-wrap gap-1.5">
            {[
              'Kubernetes',
              'ArgoCD',
              'Prometheus',
              'Grafana',
              'GitOps',
              'Docker',
              'MariaDB',
              'Kafka',
              'Ansible',
              'Helm',
              'Rook-Ceph',
              'TypeScript',
              'React',
              'Express',
              'GraphQL',
            ].map((skill) => (
              <span
                key={skill}
                className="cursor-default rounded border border-[#cc7c5e]/30 bg-gray-50 px-2 py-0.5 text-sm text-gray-600 transition-all hover:border-[#cc7c5e] hover:bg-[#cc7c5e]/10 hover:text-[#cc7c5e] dark:bg-gray-800/50 dark:text-gray-400 dark:hover:bg-[#cc7c5e]/20 dark:hover:text-[#cc7c5e]"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="space-y-4 border-l-2 border-gray-300 pl-6 dark:border-gray-600">
            <p className="italic text-gray-600 dark:text-gray-400">
              As a core member of a small yet critical team, I develop scalable
              internal applications and manage on-premises Kubernetes
              infrastructure to support production processes, focusing on robust
              Full-Stack solutions, database optimization, and multi-region
              cluster orchestration.
            </p>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold">
                DevOps and Infrastructure
              </h4>
              <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                <li>
                  Bootstrap and manage 20+ highly available, multi-region
                  on-premises Kubernetes clusters, automating bare-metal
                  provisioning with Ansible.
                </li>
                <li>
                  Spearhead the adoption of ArgoCD and GitOps as the project
                  owner, managing 10+ applications across 20+ Kubernetes
                  clusters, improving deployment efficiency by 90%.
                </li>
                <li>
                  Design and establish CI/CD pipelines with ArgoCD, DroneCI,
                  Helm, and Kustomize, enhancing developer productivity by 50%.
                </li>
                <li>
                  Enhance system observability by configuring Prometheus for
                  metric collection and Grafana for visualization.
                </li>
                <li>
                  Construct multi-purpose containerized environments with Docker
                  Compose, reducing setup time by 60% and optimizing image sizes
                  by 80%.
                </li>
                <li>
                  Mentor team members on GitOps best practices, fostering
                  collaboration and technical excellence.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Full Stack Development</h4>
              <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                <li>
                  Develop and optimize 10+ mission-critical services using
                  TypeScript, React, Express, GraphQL Apollo, and RESTful APIs
                  within a distributed system architecture.
                </li>
                <li>
                  Manage and optimize databases including MariaDB, MSSQL,
                  Cassandra, and ScyllaDB, and maintain event-driven
                  communication with Kafka.
                </li>
                <li>
                  Reduce operational overhead by 50% on global production lines
                  by delivering custom features and hot fixes.
                </li>
                <li>
                  Refactor legacy codebases, increasing test coverage to 97%+
                  with Jest, improving code maintainability and reliability.
                </li>
                <li>
                  Boost GraphQL performance by 95%, optimizing data fetching and
                  reducing latency.
                </li>
                <li>
                  Orchestrate multi-cluster data operations, including
                  synchronizations, migrations, and disaster recovery for 2 TB
                  of data using Rook-Ceph, MariaDB-Galera, and Bash scripting.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* NavisX */}
        <div className="space-y-3">
          <div>
            <h3 className="text-2xl font-bold">
              Software Engineer @ NavisX (Startup)
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Mar. 2023 - Oct. 2023 · Remote
            </p>
          </div>

          {/* Keywords */}
          <div className="flex flex-wrap gap-1.5">
            {['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Zustand'].map(
              (skill) => (
                <span
                  key={skill}
                  className="cursor-default rounded border border-[#cc7c5e]/30 bg-gray-50 px-2 py-0.5 text-sm text-gray-600 transition-all hover:border-[#cc7c5e] hover:bg-[#cc7c5e]/10 hover:text-[#cc7c5e] dark:bg-gray-800/50 dark:text-gray-400 dark:hover:bg-[#cc7c5e]/20 dark:hover:text-[#cc7c5e]"
                >
                  {skill}
                </span>
              ),
            )}
          </div>

          <div className="space-y-4 border-l-2 border-gray-300 pl-6 dark:border-gray-600">
            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Full Stack Development</h4>
              <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                <li>
                  Developed a web application with 20+ custom React components
                  using Next.js 13, TailwindCSS, TypeScript, and Zustand.
                </li>
                <li>
                  Led the technical team at an early-stage startup, driving
                  rapid product iterations in a dynamic environment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="space-y-6">
        <div className="space-y-3">
          <div>
            <h3 className="text-2xl font-bold">
              Cornell Tech, Cornell University
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              2022 · New York, NY
            </p>
          </div>
          <div className="border-l-2 border-gray-300 pl-6 dark:border-gray-600">
            <p className="text-lg font-semibold">
              Master of Engineering in Computer Science
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h3 className="text-2xl font-bold">
              University of California - San Diego
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              2021 · La Jolla, CA
            </p>
          </div>
          <div className="border-l-2 border-gray-300 pl-6 dark:border-gray-600">
            <p className="text-lg font-semibold">
              Bachelor of Science in Computer Science
            </p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Home;
