import CustomLink from '@/components/CustomLink';
import formatDate from '@/lib/formatDate';

export default function PostList({ posts }) {
  if (posts.length === 0) {
    return <div>'No posts found.'</div>;
  }

  return (
    <ul className="gap-y-2 divide-gray-200 transition-colors dark:divide-gray-700">
      {posts.map((post, i) => {
        return (
          <li key={i} className="group transition-colors">
            <CustomLink href={`/post/${post.slug}`}>
              <div className="flex flex-col gap-y-0.5 py-3 xl:items-baseline">
                <div className="text-gray-900 transition-colors hover:text-slate-400 dark:text-gray-100 sm:text-xl md:text-2xl ">
                  {post.title}
                </div>
                <div className="text-xm text-gray-900 dark:text-gray-400 md:text-base ">
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
