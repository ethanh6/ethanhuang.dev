import Image from 'next/image';
import CustomLink from '@/components/CustomLink';

export default function ProjectCard({ project }) {
  const { title, description, imgSrc, imgAlt, date, slug } = project;

  return (
    <div>
      <div
        className={
          'overflow-hidden rounded-md border-2 border-gray-300/60 transition-colors dark:border-gray-700/60'
        }
      >
        {imgSrc !== '' && (
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
              style={{
                objectFit: 'cover',
              }}
            />
          </CustomLink>
        )}
        <div className="flex flex-col gap-2 p-8">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            <CustomLink
              href={`/project/${slug}`}
              aria-label={`Link to ${title}`}
            >
              <div className="transition-colors transition-colors hover:text-slate-400 sm:block">
                {title}
              </div>
            </CustomLink>
          </h2>
          <p className="prose max-w-none text-gray-500 transition-colors dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
