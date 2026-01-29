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
            Software Engineer, SRE
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
        {/* SpaceX (Starlink) */}
        <div className="space-y-3">
          <div>
            <h3 className="text-2xl font-bold">
              Software Engineer, SRE @ SpaceX (Starlink)
            </h3>
            <p className="text-base text-gray-500 dark:text-gray-400">
              Jun. 2025 - Jan. 2026 · Sunnyvale, CA
            </p>
          </div>

          {/* Keywords */}
          <div className="flex flex-wrap gap-1.5">
            {[
              'Go',
              'Kubernetes',
              'ArgoCD',
              'Prometheus',
              'Grafana',
              'Alertmanager',
              'CockroachDB',
              'Jsonnet',
              'Helm',
              'cert-manager',
              'HashiCorp Vault',
              'Playwright',
              'GCP',
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
            <div className="space-y-3">
              <h4 className="text-lg font-semibold">SRE & Infrastructure</h4>
              <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                <li>
                  Spearheaded in-house Kubernetes operators for CockroachDB
                  using Go and kubebuilder, building 8 controllers for
                  authentication, backup restoration, schema migrations,
                  connection pooling, and multi-region data synchronization.
                </li>
                <li>
                  Executed zero-downtime production database migrations using
                  ArgoCD and in-house K8s operator, coordinating schema changes
                  while maintaining 99.9%+ availability and data integrity.
                </li>
                <li>
                  Engineered Kubernetes operator conversion webhook to upgrade
                  100+ legacy custom resources for 60+ microservices,
                  eliminating manual effort and ensuring seamless API upgrades.
                </li>
                <li>
                  Transformed infrastructure provisioning from Helm to Jsonnet
                  for 10+ microservices across all environments, improving
                  configurability and eliminating YAML-based overlay sprawl.
                </li>
                <li>
                  Automated TLS certificate and secrets management with
                  cert-manager, HashiCorp Vault, and external-secrets, replacing
                  manual credential rotation across all environments.
                </li>
                <li>
                  Right-sized Kubernetes replicas across 60+ services using
                  Prometheus and Grafana, achieving $50K/month ($600K
                  annualized) in savings and defining capacity for GCP to
                  on-premises migration.
                </li>
                <li>
                  Built database monitoring system using Prometheus and Grafana;
                  migrated legacy alerting infrastructure to Alertmanager,
                  reducing mean time to detection by 40% across production
                  clusters.
                </li>
                <li>
                  Maintained 99.9%+ uptime SLO for starlink.com serving millions
                  of users through on-call rotation, triaging and resolving
                  critical incidents including data replication failures and
                  failovers.
                </li>
                <li>
                  Standardized CI test infrastructure across 700+ Playwright
                  tests, identifying and triaging flaky tests to owners, driving
                  60% reduction in flaky tests and faster deployment cycle.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Supermicro */}
        <div className="space-y-3">
          <div>
            <h3 className="text-2xl font-bold">
              Software Engineer @ Supermicro
            </h3>
            <p className="text-base text-gray-500 dark:text-gray-400">
              Nov. 2023 - May 2025 · San Jose, CA
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
              'Ansible',
              'Helm',
              'Kustomize',
              'DroneCI',
              'MariaDB',
              'Kafka',
              'Rook-Ceph',
              'TypeScript',
              'React',
              'Express',
              'GraphQL',
              'Jest',
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
            <div className="space-y-3">
              <h4 className="text-lg font-semibold">SRE & Infrastructure</h4>
              <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                <li>
                  Architected and operated 25+ highly available, on-premises
                  Kubernetes clusters managing hundreds of servers across 4
                  regions, automating bare-metal provisioning and configuration
                  management with Ansible, ensuring 99.9%+ availability via
                  Kube-VIP, MetalLB, HAProxy, and Nginx.
                </li>
                <li>
                  Owned ArgoCD platform end-to-end, driving GitOps adoption
                  across the organization to manage 20+ applications across 25+
                  Kubernetes clusters, reducing deployment time by 90%.
                </li>
                <li>
                  Engineered CI/CD pipelines as sole infrastructure engineer on
                  a 4-person team, building with ArgoCD, DroneCI, Helm, and
                  Kustomize to reduce deployment lead time by 50% and enable
                  self-service deployments for engineering teams.
                </li>
                <li>
                  Implemented observability stack with Prometheus and Grafana,
                  enabling real-time monitoring and alerting across 25+
                  production clusters with 500+ custom metrics.
                </li>
                <li>
                  Built multi-purpose containerized development environments
                  with Docker Compose, cutting setup time by 60% and reducing
                  image sizes by 80%.
                </li>
                <li>
                  Mentored 5+ engineers on GitOps best practices, achieving
                  team-wide adoption and establishing standardized deployment
                  workflows.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-lg font-semibold">Full Stack Development</h4>
              <ul className="list-disc space-y-2 pl-5 text-gray-700 dark:text-gray-300">
                <li>
                  Reduced GraphQL query latency by 95%, implementing efficient
                  data fetching patterns that cut API response times from
                  seconds to milliseconds.
                </li>
                <li>
                  Refactored legacy codebases and increased test coverage from
                  ~40% to 97%+ using Jest, reducing production bugs by 70% and
                  improving maintainability.
                </li>
                <li>
                  Developed and optimized 10+ mission-critical services using
                  TypeScript, React, Express, GraphQL Apollo, and RESTful APIs,
                  supporting global manufacturing operations across 10+
                  facilities and reducing production line downtime by 50%.
                </li>
                <li>
                  Deployed and managed distributed storage infrastructure,
                  orchestrating multi-cluster data synchronization, migrations,
                  and disaster recovery for 2 TB of data using Rook-Ceph,
                  MariaDB-Galera, and Bash/Python scripting, achieving 99.9%+
                  uptime across production environments.
                </li>
                <li>
                  Administered and tuned MariaDB, MSSQL, Cassandra, and ScyllaDB
                  databases and Kafka event pipelines, ensuring sub-second query
                  performance across distributed system components.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* NavisX */}
        <div className="space-y-3">
          <div>
            <h3 className="text-2xl font-bold">
              Software Engineer @ NavisX-AlluringSelf (Startup)
            </h3>
            <p className="text-base text-gray-500 dark:text-gray-400">
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
                  Led engineering at 4-person startup, architecting full-stack
                  application with React and Next.js, shipping MVP to 100+ beta
                  users within 4 months.
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
              May 2022 · New York, NY
            </p>
          </div>
          <div className="border-l-2 border-gray-300 pl-6 dark:border-gray-600">
            <p className="text-lg font-semibold">
              Master of Engineering in Computer Science
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Merit Scholarship
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <h3 className="text-2xl font-bold">
              University of California, San Diego
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Jun. 2021 · La Jolla, CA
            </p>
          </div>
          <div className="border-l-2 border-gray-300 pl-6 dark:border-gray-600">
            <p className="text-lg font-semibold">
              Bachelor of Science in Computer Science
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              GPA: 3.94 | Provost Honors
            </p>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Home;
