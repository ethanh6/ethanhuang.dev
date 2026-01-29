import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// CLI content generators
function getHomeContent(): string {
  return `
╔════════════════════════════════════════════════════════════════╗
║                        ETHAN HUANG                             ║
║                  Software Engineer, SRE                        ║
╚════════════════════════════════════════════════════════════════╝

Hi! I'm Ethan, welcome to my website.

I'm a Software Engineer and SRE specializing in building reliable
infrastructure and scalable distributed systems. I focus on designing
efficient systems that solve real-world challenges and drive operational
success.

With expertise in Go, Kubernetes, ArgoCD, Prometheus, and GitOps, I build
and maintain production infrastructure serving millions of users while
ensuring reliability and scalability.

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
║                   Software Engineer, SRE                       ║
╚════════════════════════════════════════════════════════════════╝

                 Download the resume with wget

          wget https://ethanhuang.dev/files/Resume-Ethan-Huang.pdf

═══════════════════════════════════════════════════════════════════
                     PROFESSIONAL EXPERIENCE
═══════════════════════════════════════════════════════════════════

🏢 Software Engineer, SRE @ SpaceX (Starlink)
📍 Sunnyvale, CA | Jun. 2025 - Jan. 2026

SRE & Infrastructure:
  • Spearheaded in-house Kubernetes operators for CockroachDB using Go
    and kubebuilder, building 8 controllers for authentication, backup
    restoration, schema migrations, and multi-region data synchronization
  • Executed zero-downtime production database migrations using ArgoCD
    and in-house K8s operator, maintaining 99.9%+ availability
  • Engineered Kubernetes operator conversion webhook to upgrade 100+
    legacy custom resources for 60+ microservices
  • Transformed infrastructure provisioning from Helm to Jsonnet for 10+
    microservices across all environments
  • Right-sized Kubernetes replicas across 60+ services, achieving
    $50K/month ($600K annualized) in savings
  • Maintained 99.9%+ uptime SLO for starlink.com serving millions of users

-------------------------------------------------------------------

🏢 Software Engineer @ Supermicro
📍 San Jose, CA | Nov. 2023 - May 2025

SRE & Infrastructure:
  • Architected and operated 25+ highly available, on-premises Kubernetes
    clusters managing hundreds of servers across 4 regions
  • Owned ArgoCD platform end-to-end, driving GitOps adoption across the
    organization to manage 20+ applications across 25+ clusters
  • Engineered CI/CD pipelines as sole infrastructure engineer on a
    4-person team, reducing deployment lead time by 50%
  • Implemented observability stack with Prometheus and Grafana across
    25+ production clusters with 500+ custom metrics

Full Stack Development:
  • Reduced GraphQL query latency by 95%, cutting API response times
    from seconds to milliseconds
  • Developed and optimized 10+ mission-critical services using
    TypeScript, React, Express, GraphQL Apollo, and RESTful APIs
  • Refactored legacy codebases and increased test coverage from ~40%
    to 97%+ using Jest, reducing production bugs by 70%

-------------------------------------------------------------------

🏢 Software Engineer @ NavisX-AlluringSelf (Startup)
📍 Remote | Mar. 2023 - Oct. 2023

  • Led engineering at 4-person startup, architecting full-stack
    application with React and Next.js, shipping MVP to 100+ beta users

═══════════════════════════════════════════════════════════════════
                          EDUCATION
═══════════════════════════════════════════════════════════════════

🎓 Cornell Tech, Cornell University
   Master of Engineering in Computer Science, May 2022
   Merit Scholarship | New York, NY

🎓 University of California, San Diego
   Bachelor of Science in Computer Science, Jun. 2021
   GPA: 3.94 | Provost Honors | La Jolla, CA

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
