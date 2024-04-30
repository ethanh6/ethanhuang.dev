import CustomLink from '@/components/CustomLink';
import formatDate from '@/lib/formatDate';

export default function PostList({ posts }) {
  if (posts.length === 0) {
    return <div>No posts found.</div>;
  }

  return (
    <ul className="max-w-full gap-y-2 pt-6 dark:divide-gray-700">
      {posts.map((post, i) => {
        return (
          <li key={i} className="transition-colors">
            <CustomLink href={`/post/${post.slug}`}>
              <div className="flex flex-row gap-x-4 py-3 text-gray-900 transition-colors hover:text-slate-400 xl:items-baseline">
                <div className="dark:text-gray-100 sm:text-xl md:text-xl">
                  {post.title}
                </div>
                <div className="hidden md:text-sm">-</div>
                <div className="hidden dark:text-gray-400 md:text-sm">
                  {formatDate(post.date)}
                </div>
              </div>
            </CustomLink>
          </li>
        );
      })}
    </ul>
  );
}
