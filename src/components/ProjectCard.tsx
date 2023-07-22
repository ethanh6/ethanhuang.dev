import Image from 'next/image';

import CustomLink from '@/components/CustomLink';
import { Project } from '@/lib/contentLayerAdapter';

type Prop = {
  project: Project;
};

export default function ProjectCard({ project }: Prop) {
  const { title, description, path, imgSrc, imgAlt } = project;

  return (
    <div>
      <div
        className={
          'h-full overflow-hidden rounded-md border-2 border-gray-300/60 transition-colors dark:border-gray-700/60'
        }
      >
        <CustomLink
          href={path}
          aria-label={`Link to ${title}`}
          className="relative block aspect-video w-full"
        >
          <Image
            alt={imgAlt}
            src={imgSrc}
            className="bg-gray-300 object-cover object-center dark:bg-gray-700"
            quality="30"
            // placeholder={imgPlaceholder}
            layout="fill"
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 344px, 472px"
            style={{
              objectFit: 'cover',
            }}
          />
        </CustomLink>
        <div className="p-6">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            <CustomLink href={path} aria-label={`Link to ${title}`}>
              {title}
            </CustomLink>
          </h2>
          <p
            className="prose mb-3 max-w-none text-gray-500 transition-colors dark:text-gray-400"
            dangerouslySetInnerHTML={{
              __html: description,
            }}
          />
          <CustomLink
            href={path}
            className="text-base font-medium leading-6 text-primary-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${title}`}
          >
            {'learn-more'} &rarr;
          </CustomLink>
        </div>
      </div>
    </div>
  );
}
