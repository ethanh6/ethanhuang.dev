import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';

  // Check if the request is from curl or similar CLI tools
  const isCurlRequest =
    userAgent.toLowerCase().includes('curl') ||
    userAgent.toLowerCase().includes('wget') ||
    userAgent.toLowerCase().includes('httpie');

  // If accessed from a browser, redirect to homepage
  if (!isCurlRequest) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const plainText = `
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
   • Resume: https://ethanhuang.dev/resume
   • Resume (CLI): curl https://ethanhuang.dev/api/resume

📚 More:
   • About: https://ethanhuang.dev/about
   • Skills: https://ethanhuang.dev/skill
   • Projects: https://ethanhuang.dev/project
   • Posts: https://ethanhuang.dev/post
   • Posts (CLI): curl https://ethanhuang.dev/api/posts
`;

  return new NextResponse(plainText, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
