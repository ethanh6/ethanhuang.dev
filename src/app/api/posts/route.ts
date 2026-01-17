import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { getPosts } from '@/lib/markdown';

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';

  // Check if the request is from curl or similar CLI tools
  const isCurlRequest =
    userAgent.toLowerCase().includes('curl') ||
    userAgent.toLowerCase().includes('wget') ||
    userAgent.toLowerCase().includes('httpie');

  // If accessed from a browser, redirect to posts page
  if (!isCurlRequest) {
    return NextResponse.redirect(new URL('/post', request.url));
  }

  try {
    const posts = await getPosts();

    let plainText = `
╔════════════════════════════════════════════════════════════════╗
║                        BLOG POSTS                              ║
╚════════════════════════════════════════════════════════════════╝

Thoughts, tutorials, and insights about technology and programming

`;

    if (posts.length === 0) {
      plainText += '\nNo posts available yet.\n';
    } else {
      posts.forEach((post: any, index: number) => {
        plainText += `
${index + 1}. ${post.title}
   ${post.description || 'No description'}
   📅 ${post.date || 'No date'}
   ⏱️  ${post.readingTime || '?'} min read
   🔗 https://ethanhuang.dev/post/${post.slug}

`;
      });
    }

    plainText += `
═══════════════════════════════════════════════════════════════════
💡 View in browser: https://ethanhuang.dev/post
`;

    return new NextResponse(plainText, {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  } catch (error) {
    const errorText = `
╔════════════════════════════════════════════════════════════════╗
║                        BLOG POSTS                              ║
╚════════════════════════════════════════════════════════════════╝

Error loading posts. Please try again later or visit:
https://ethanhuang.dev/post
`;

    return new NextResponse(errorText, {
      status: 500,
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    });
  }
}
