import CustomLink from '@/components/CustomLink';
import formatDate from '@/lib/formatDate';

export default function PostList({ posts }: { posts: ContentData[] }) {
  return (
    <ul className="divide-gray-200 transition-colors dark:divide-gray-700">
      {!posts.length && 'No posts found.'}
      {posts.map((post, i) => {
        const { content, data } = post as {
          content: string;
          data: PostType;
        };

        return (
          <li key={i} className="group transition-colors">
            <CustomLink href={`/post/${data.slug}`}>
              <article className="space-y-2 rounded-xl p-4 transition-colors group-hover:bg-gray-100 dark:group-hover:bg-gray-800 xl:grid xl:grid-cols-4  xl:items-baseline xl:space-y-0">
                <div className="text-sm font-medium leading-6 text-gray-500 transition-colors dark:text-gray-400 md:text-base">
                  {formatDate(data.date)}
                </div>
                <div className="space-y-3 xl:col-span-3">
                  <h3 className="text-lg font-bold tracking-tight text-gray-900 transition-colors dark:text-gray-100 sm:text-xl md:text-2xl">
                    {data.title}
                  </h3>
                </div>
              </article>
            </CustomLink>
          </li>
        );
      })}
    </ul>
  );
}
