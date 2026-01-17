import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Captured at build time
const BUILD_TIME = new Date().toISOString();

export async function GET(request: NextRequest) {
  const userAgent = request.headers.get('user-agent') || '';

  const isCurlRequest =
    userAgent.toLowerCase().includes('curl') ||
    userAgent.toLowerCase().includes('wget');

  if (!isCurlRequest) {
    return NextResponse.json({
      status: 'ok',
      buildTime: BUILD_TIME,
      timestamp: new Date().toISOString(),
    });
  }

  const plainText = `
╔════════════════════════════════════════════════════════════════╗
║                        SITE STATUS                             ║
╚════════════════════════════════════════════════════════════════╝

📊 Status: OK

🏗️  Build Time:   ${BUILD_TIME}
🕐 Current Time: ${new Date().toISOString()}
`;

  return new NextResponse(plainText, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
