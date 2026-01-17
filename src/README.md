# Routes Documentation

This site supports both browser and CLI (curl/wget) access. The routing logic is handled by `proxy.ts` which detects the user agent and serves appropriate content.

## Route Overview

| Path | Browser | CLI |
|------|---------|-----|
| `/` | Homepage (React) | Plain text intro |
| `/post` | Blog post list (React) | Plain text post list |
| `/posts` | Redirects → `/post` | Plain text post list |
| `/resume` | Resume page (React) | Plain text resume |
| `/status` | JSON status | Plain text status |
| `/about` | About page (React) | 404 (not available) |
| `/skill` | Skills page (React) | 404 (not available) |
| `/project` | Projects page (React) | 404 (not available) |

## How It Works

### Proxy (`src/proxy.ts`)

The proxy runs on all requests (except static files) and handles routing based on user agent:

```
Request → proxy.ts → Is CLI? → Yes → Serve plain text or rewrite to route handler
                            → No  → Handle redirects or pass through to pages
```

**CLI Detection**: Checks if user agent contains `curl` or `wget`.

### Browser Requests

- `/posts` → Redirects to `/post`
- All other paths → Pass through to Next.js pages

### CLI Requests

| Path | Handler | Description |
|------|---------|-------------|
| `/` | `proxy.ts` (inline) | Static plain text content |
| `/post` | Rewrite → `/posts` | Route handler serves post list |
| `/posts` | `src/app/posts/route.ts` | Fetches posts, returns plain text |
| `/resume` | `proxy.ts` (inline) | Static plain text content |
| `/status` | `src/app/status/route.ts` | Returns build time and current time |
| Other paths | `proxy.ts` | Returns 404 with available endpoints |

## File Structure

```
src/
├── proxy.ts                    # Main routing logic (CLI detection, redirects)
├── app/
│   ├── page.tsx               # Homepage (browser)
│   ├── post/
│   │   └── page.tsx           # Blog list (browser)
│   ├── posts/
│   │   └── route.ts           # Blog list (CLI only)
│   ├── resume/
│   │   └── page.tsx           # Resume (browser)
│   ├── status/
│   │   └── route.ts           # Status endpoint (CLI + browser JSON)
│   ├── about/
│   ├── skill/
│   └── project/
└── lib/
    └── markdown.ts            # MDX data fetching utilities
```

## Usage Examples

### CLI

```bash
# Homepage
curl https://ethanhuang.dev

# Blog posts
curl https://ethanhuang.dev/post
curl https://ethanhuang.dev/posts  # Same result

# Resume
curl https://ethanhuang.dev/resume

# Status
curl https://ethanhuang.dev/status
```

### Browser

Simply visit any URL in your browser - you'll see the React-rendered pages.

## Adding New CLI Routes

1. **Static content**: Add a condition in `proxy.ts` and return inline content
2. **Dynamic content**: Create a `route.ts` file and add a rewrite/passthrough in `proxy.ts`

Example for static content in `proxy.ts`:
```typescript
if (pathname === '/new-route') {
  return new NextResponse('Your content here', { headers });
}
```

Example for dynamic content:
1. Create `src/app/new-route/route.ts`
2. Add in `proxy.ts`:
```typescript
if (pathname === '/new-route') {
  return NextResponse.next(); // Pass to route handler
}
```

## Notes

- The `/status` route captures build time at build, so it reflects when the app was deployed
- CLI responses use UTF-8 plain text with ASCII art formatting
- Browser requests to route-only paths (like `/posts`) are redirected to their page equivalents
