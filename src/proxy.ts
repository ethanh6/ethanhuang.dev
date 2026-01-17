import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// CLI content generators
function getHomeContent(): string {
  return `
╔════════════════════════════════════════════════════════════════╗
║                        ETHAN HUANG                             ║
║                    Software Engineer                           ║
╚════════════════════════════════════════════════════════════════╝

Hi! I'm Ethan, welcome to my website.

I'm a Software Engineer specializing in building scalable full-stack
applications and managing reliable and scalable infrastructure. I focus
on designing efficient systems that solve real-world challenges and
drive operational success.

With expertise in TypeScript, React.js, Next.js, Express.js, GraphQL,
Kubernetes, Docker, and ArgoCD, I deliver robust, innovative solutions
that tackle complex challenges while ensuring reliability and scalability.

🔍 I'm currently looking for new career opportunities!

📧 Contact:
   • LinkedIn: https://www.linkedin.com/in/ethanhuang0606/
   • GitHub: https://github.com/ethanh6

📚 More (use curl):
   • curl https://ethanhuang.dev/posts    - Blog posts
   • curl https://ethanhuang.dev/resume   - Resume
   • curl https://ethanhuang.dev/status   - Site status

🌐 View in browser: https://ethanhuang.dev
`;
}

function getResumeContent(): string {
  return `
╔════════════════════════════════════════════════════════════════╗
║                    ETHAN HUANG - RESUME                        ║
╚════════════════════════════════════════════════════════════════╝

     wget https://ethanhuang.dev/files/Resume-Ethan-Huang.pdf     

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
}

function getNotFoundContent(pathname: string): string {
  return `
╔════════════════════════════════════════════════════════════════╗
║                      404 - NOT FOUND                           ║
╚════════════════════════════════════════════════════════════════╝

This page is not available via CLI.

Available CLI endpoints:
  • curl https://ethanhuang.dev          - Homepage
  • curl https://ethanhuang.dev/posts    - Blog posts
  • curl https://ethanhuang.dev/resume   - Resume
  • curl https://ethanhuang.dev/status   - Site status

View this page in your browser:
  https://ethanhuang.dev${pathname}
`;
}

// AWS Amplify uses 'proxy' instead of 'middleware'
export default function proxy(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';
  const pathname = request.nextUrl.pathname;

  // Check if the request is from curl or similar CLI tools
  const isCurlRequest =
    userAgent.toLowerCase().includes('curl') ||
    userAgent.toLowerCase().includes('wget');

  // Handle browser redirects
  if (!isCurlRequest) {
    // Redirect /posts to /post for browsers
    if (pathname === '/posts') {
      return NextResponse.redirect(new URL('/post', request.url));
    }
    return NextResponse.next();
  }

  // Handle CLI requests
  const headers = { 'Content-Type': 'text/plain; charset=utf-8' };

  // Route: /
  if (pathname === '/' || pathname === '') {
    return new NextResponse(getHomeContent(), { headers });
  }

  // Route: Posts - rewrite both /post and /posts to route handler
  if (pathname === '/post' || pathname === '/posts') {
    return NextResponse.rewrite(new URL('/posts', request.url));
  }

  // Route: Resume
  if (pathname === '/resume') {
    return new NextResponse(getResumeContent(), { headers });
  }

  // Route: Status - let route handler serve CLI content
  if (pathname === '/status') {
    return NextResponse.next();
  }

  // 404 for unsupported CLI paths
  return new NextResponse(getNotFoundContent(pathname), {
    status: 404,
    headers,
  });
}

// Run on all routes except static files
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|files|images).*)'],
};
