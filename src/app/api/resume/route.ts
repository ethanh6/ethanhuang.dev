import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';

  // Check if the request is from curl or similar CLI tools
  const isCurlRequest =
    userAgent.toLowerCase().includes('curl') ||
    userAgent.toLowerCase().includes('wget') ||
    userAgent.toLowerCase().includes('httpie');

  // If accessed from a browser, redirect to resume page
  if (!isCurlRequest) {
    return NextResponse.redirect(new URL('/resume', request.url));
  }

  const plainText = `
╔════════════════════════════════════════════════════════════════╗
║                    ETHAN HUANG - RESUME                        ║
╚════════════════════════════════════════════════════════════════╝

📄 Download PDF: https://ethanhuang.dev/files/Resume-Ethan-Huang.pdf

═══════════════════════════════════════════════════════════════════
                     PROFESSIONAL EXPERIENCE
═══════════════════════════════════════════════════════════════════

🏢 Software Engineer @ Supermicro
📍 San Jose, CA | Nov. 2023 - Current

As a core member of a small yet critical team, I develop scalable
internal applications and manage on-premises Kubernetes infrastructure
to support production processes, focusing on robust Full-Stack solutions,
database optimization, and multi-region cluster orchestration.

Full Stack Development:
  • Develop and optimize 10+ mission-critical services using TypeScript,
    React, Express, GraphQL Apollo, and RESTful APIs
  • Manage databases: MariaDB, MSSQL, Cassandra, ScyllaDB
  • Maintain event-driven communication with Kafka
  • Reduced operational overhead by 50% on global production lines
  • Refactored legacy codebases, increasing test coverage to 97%+
  • Boosted GraphQL performance by 95%
  • Orchestrated multi-cluster data operations for 2 TB of data

DevOps and Infrastructure:
  • Bootstrap and manage 20+ multi-region on-premises Kubernetes clusters
  • Spearheaded ArgoCD and GitOps adoption across 10+ applications
  • Designed CI/CD pipelines with ArgoCD, DroneCI, Helm, and Kustomize
  • Enhanced observability with Prometheus and Grafana
  • Optimized Docker environments, reducing setup time by 60%

-------------------------------------------------------------------

🏢 Software Engineer @ NavisX (Startup)
📍 Remote | Mar. 2023 - Oct. 2023

  • Developed web application with 20+ custom React components
  • Used Next.js 13, TailwindCSS, TypeScript, and Zustand
  • Led technical team at early-stage startup

═══════════════════════════════════════════════════════════════════
                          EDUCATION
═══════════════════════════════════════════════════════════════════

🎓 Cornell Tech, Cornell University
   Master of Engineering in Computer Science, 2022
   New York, NY

🎓 University of California - San Diego
   Bachelor of Science in Computer Science, 2021
   La Jolla, CA

═══════════════════════════════════════════════════════════════════

🌐 Full resume: https://ethanhuang.dev/resume
📧 LinkedIn: https://www.linkedin.com/in/ethanhuang0606/
💻 GitHub: https://github.com/ethanh6
`;

  return new NextResponse(plainText, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
