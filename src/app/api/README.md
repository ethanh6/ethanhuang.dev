# CLI Support for ethanhuang.dev

This feature enables CLI-friendly access to the website via `curl`, `wget`, or `httpie`.

## Quick Start

```bash
curl https://ethanhuang.dev           # Homepage
curl https://ethanhuang.dev/posts     # Blog posts
curl https://ethanhuang.dev/resume    # Resume
```

## Overview

The website uses Next.js middleware to detect CLI tools (via User-Agent header) and return plain text formatted content instead of HTML. Browser requests render the normal React pages.

## Architecture

### How It Works

```
                    ┌─────────────────┐
                    │   Middleware    │
                    │ (User-Agent     │
                    │  Detection)     │
                    └────────┬────────┘
                             │
              ┌──────────────┴──────────────┐
              │                             │
        ┌─────▼─────┐               ┌───────▼───────┐
        │  CLI Tool │               │    Browser    │
        │  (curl)   │               │  (Chrome/FF)  │
        └─────┬─────┘               └───────┬───────┘
              │                             │
        ┌─────▼─────┐               ┌───────▼───────┐
        │Plain Text │               │  HTML/React   │
        │  Response │               │    Pages      │
        └───────────┘               └───────────────┘
```

### Middleware Implementation

The middleware (`src/middleware.ts`) handles:

1. **User-Agent Detection**: Checks for `curl`, `wget`, or `httpie`
2. **Route Matching**: Maps URLs to content generators
3. **Content Generation**: Returns ASCII-formatted plain text
4. **404 Handling**: Returns CLI-friendly 404 for unsupported paths

### Supported Routes

| URL | CLI Output | Browser Output |
|-----|------------|----------------|
| `/` | Plain text intro | React homepage |
| `/posts` or `/post` | Plain text post list | React post list |
| `/resume` | Plain text resume | React resume page |
| `/api`, `/api/posts`, `/api/resume` | Same as above (backward compat) | Redirects to main pages |
| Other paths | 404 with CLI help | Normal React pages |

## Platform Requirements

This implementation uses Next.js middleware which requires:

- **AWS Amplify Gen 2** ✅
- **Vercel** ✅
- **GCP Cloud Run** ✅
- **Any Node.js hosting** ✅
- **AWS Amplify Gen 1** ⚠️ (Limited support)

## File Structure

```
src/
├── middleware.ts          # CLI detection and plain text responses
└── app/
    ├── page.tsx          # React homepage (browsers)
    ├── post/
    │   └── page.tsx      # React posts page (browsers)
    ├── resume/
    │   └── page.tsx      # React resume page (browsers)
    └── api/              # (Optional) API route fallbacks
        ├── route.ts
        ├── posts/route.ts
        └── resume/route.ts
```

## User Agent Detection

The middleware detects these CLI tools:
- `curl`
- `wget`
- `httpie`

Detection is case-insensitive and checks if the User-Agent header contains the tool name.

## Testing Locally

```bash
# Start dev server
npm run dev

# Test CLI endpoints
curl http://localhost:3000
curl http://localhost:3000/posts
curl http://localhost:3000/resume

# Test 404 handling
curl http://localhost:3000/nonexistent

# Test browser behavior (should return HTML)
curl -A "Mozilla/5.0" http://localhost:3000
```

## Adding New CLI Endpoints

1. Add a content generator function in `middleware.ts`:
   ```typescript
   function getNewContent(): string {
     return `...plain text content...`;
   }
   ```

2. Add route handling in the middleware:
   ```typescript
   if (pathname === '/new-path') {
     return new NextResponse(getNewContent(), { headers });
   }
   ```

3. Update this README with the new endpoint

## Customization

### Changing the ASCII Art Header

Edit the content generator functions in `middleware.ts` to customize the ASCII art borders and formatting.

### Adding More CLI Tools

Add tool names to the detection check:
```typescript
const isCurlRequest =
  userAgent.toLowerCase().includes('curl') ||
  userAgent.toLowerCase().includes('wget') ||
  userAgent.toLowerCase().includes('httpie') ||
  userAgent.toLowerCase().includes('your-tool');
```

## Related Files

- `src/middleware.ts` - Main CLI handling logic
- `src/lib/markdown.ts` - Blog post data fetching
- `amplify.yml` - AWS Amplify build configuration
- `DEPLOYMENT.md` - Deployment instructions
