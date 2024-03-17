import CustomLink from '@/components/CustomLink';
import PageTitle from '@/components/PageTitle';
import formatDate from '@/lib/formatDate';

import { MDXRemote } from 'next-mdx-remote/rsc';

export default function PostLayout({
  post,
  nextPost,
  prevPost,
  type,
}: {
  post: ContentData;
  nextPost: ContentData | null;
  prevPost: ContentData | null;
  type: ContentType;
}) {
  const {
    content,
    data: { title, description, date, slug },
  } = post;

  const dateStr = formatDate(date);

  return (
    <article>
      <div className="divide-y divide-gray-200 transition-colors dark:divide-gray-700">
        <header className="py-6">
          <div className="space-y-1 text-center">
            <div className="mb-4">
              <PageTitle>{title}</PageTitle>
            </div>

            <div className="text-base font-medium leading-6 text-gray-500 transition-colors dark:text-gray-400">
              <div>{description}</div>
              <div>{dateStr}</div>
            </div>
          </div>
        </header>

        <div className="divide-y divide-gray-200 pb-8 pt-10 transition-colors dark:divide-gray-700 lg:col-span-3">
          <MDXRemote source={content} />
        </div>

        <div className="divide-y divide-gray-200 pb-8 transition-colors dark:divide-gray-700">
          <footer>
            <div className="flex flex-col gap-4 pt-4 text-base font-medium sm:flex-row sm:justify-between xl:gap-8 xl:pt-8">
              {prevPost ? (
                <div className="basis-6/12">
                  <h2 className="mb-1 text-xs uppercase tracking-wide text-gray-500 transition-colors dark:text-gray-400">
                    {'previous-article'}
                  </h2>
                  <CustomLink
                    href={`/${type}/${prevPost.data.slug}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    &larr; {prevPost.data.title}
                  </CustomLink>
                </div>
              ) : (
                <div />
              )}

              {nextPost && (
                <div className="basis-6/12">
                  <h2 className="mb-1 text-left text-xs uppercase tracking-wide text-gray-500 transition-colors dark:text-gray-400 sm:text-right">
                    {'next-article'}
                  </h2>
                  <CustomLink
                    href={`/${type}/${nextPost.data.slug}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 block transition-colors sm:text-right"
                  >
                    {nextPost.data.title} &rarr;
                  </CustomLink>
                </div>
              )}
            </div>
          </footer>
        </div>
      </div>
    </article>
  );
}
