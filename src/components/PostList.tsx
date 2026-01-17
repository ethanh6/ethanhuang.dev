import CustomLink from '@/components/CustomLink';
import formatDate from '@/lib/formatDate';

interface Post {
  title: string;
  slug: string;
  date: string;
  excerpt?: string;
  readingTime?: string;
}

export default function PostList({ posts }: { posts: Post[] }) {
  if (posts.length === 0) {
    return (
      <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
        No posts found.
      </div>
    );
  }

  return (
    <ul className="mt-8 space-y-8">
      {posts.map((post, i) => {
        return (
          <li key={i} className="group relative">
            <article className="space-y-2">
              <div className="flex items-center gap-x-4">
                <h2 className="text-xl font-semibold text-gray-900 transition-colors group-hover:text-slate-600 dark:text-gray-100 dark:group-hover:text-slate-400">
                  <CustomLink
                    href={`/post/${post.slug}`}
                    className="before:absolute before:inset-0 before:z-0"
                  >
                    {post.title}
                  </CustomLink>
                </h2>
                <div className="hidden text-sm text-gray-500 dark:text-gray-400 md:block">
                  {formatDate(post.date)}
                </div>
              </div>
              {post.excerpt && (
                <p className="text-gray-600 dark:text-gray-400">
                  {post.excerpt}
                </p>
              )}
              <div className="flex items-center gap-x-4 text-sm text-gray-500 dark:text-gray-400">
                {post.readingTime && (
                  <span>{post.readingTime} min read</span>
                )}
                <span className="md:hidden">{formatDate(post.date)}</span>
              </div>
            </article>
          </li>
        );
      })}
    </ul>
  );
}
