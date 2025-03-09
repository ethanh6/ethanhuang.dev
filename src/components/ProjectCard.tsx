import Image from 'next/image';

export default function ProjectCard({ project }) {
  const { title, description, imgSrc, imgAlt, date, keywords } = project;

  return (
    <div className="flex flex-col gap-4">
      {imgSrc !== '' && (
        <div className="relative block aspect-video w-full overflow-hidden rounded-lg">
          <Image
            alt={imgAlt}
            src={imgSrc}
            width={800}
            height={450}
            className="z-0 bg-gray-300 object-cover object-center transition-transform duration-300 group-hover:scale-105 dark:bg-gray-700"
            quality="75"
          />
        </div>
      )}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold leading-8 tracking-tight">
            <span className="highlight transition-colors group-hover:text-slate-400">
              {title}
            </span>
          </h2>
          {date && (
            <time className="text-sm text-gray-500 dark:text-gray-400">
              {date}
            </time>
          )}
        </div>
        <p className="prose max-w-none text-gray-600 dark:text-gray-300">
          {description}
        </p>
        {keywords && (
          <div className="flex flex-wrap gap-2">
            {keywords.split(',').map((keyword, index) => (
              <span
                key={index}
                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600 dark:bg-gray-700 dark:text-gray-300"
              >
                {keyword.trim()}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
