import Image from 'next/image';
import CustomLink from '@/components/CustomLink';

export default function ProjectCard({ project }) {
  const { title, description, imgSrc, imgAlt, date, slug } = project;

  return (
    <div>
      <div
        className={
          'h-full overflow-hidden rounded-md border-2 border-gray-300/60 transition-colors dark:border-gray-700/60'
        }
      >
        <CustomLink
          href={`/project/${slug}`}
          aria-label={`Link to ${title}`}
          className="relative block aspect-video w-full"
        >
          <Image
            alt={imgAlt}
            src={imgSrc}
            width={400}
            height={300}
            className="bg-gray-300 object-cover object-center dark:bg-gray-700"
            quality="30"
            // placeholder={imgPlaceholder}
            style={{
              objectFit: 'cover',
            }}
          />
        </CustomLink>
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            <CustomLink
              href={`/project/${slug}`}
              aria-label={`Link to ${title}`}
            >
              {title}
            </CustomLink>
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 transition-colors dark:text-gray-400">
            {description}
          </p>
          <CustomLink
            href={`/project/${slug}`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-base font-medium leading-6 transition-colors"
            aria-label={`Link to ${title}`}
          >
            {'learn-more'} &rarr;
          </CustomLink>
        </div>
      </div>
    </div>
  );
}
