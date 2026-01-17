import Link from 'next/link';
import Image from 'next/image';
import type { ImageProps } from 'next/image';

export const CustomMdxComponent = {
  h1: ({ children }) => (
    <h1 className="mb-8 mt-12 border-b border-gray-200 pb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mb-6 mt-10 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mb-4 mt-8 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  ),
  h4: ({ children }) => (
    <h4 className="mb-4 mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h4>
  ),
  h5: ({ children }) => (
    <h5 className="mb-2 mt-4 text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h5>
  ),
  h6: ({ children }) => (
    <h6 className="mb-2 mt-4 text-base font-bold tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h6>
  ),
  p: ({ children }) => (
    <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
      {children}
    </p>
  ),
  a: ({ href, children, ...props }) => {
    const isInternal = href && (href.startsWith('/') || href.startsWith('#'));
    const baseStyles = "text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline-offset-4 hover:underline transition-colors";

    if (isInternal) {
      return (
        <Link {...props} href={href} className={baseStyles}>
          {children}
        </Link>
      );
    }

    return (
      <a 
        href={href} 
        {...props} 
        className={baseStyles}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  },
  img: (props) => {
    return (
      <Image
        width={2000}
        height={500}
        {...(props as ImageProps)}
        className="my-8 rounded-lg shadow-lg"
        alt={props.alt || ''}
      />
    );
  },
  ol: (props) => (
    <ol {...props} className="mb-6 ml-6 list-decimal space-y-2 text-gray-700 dark:text-gray-300" />
  ),
  ul: (props) => (
    <ul {...props} className="mb-6 ml-6 list-disc space-y-2 text-gray-700 dark:text-gray-300" />
  ),
  li: (props) => (
    <li {...props} className="text-lg leading-relaxed" />
  ),
  pre: ({ children }) => {
    return (
      <div className="my-8 overflow-x-auto rounded-lg bg-gray-50 dark:bg-gray-900">
        <pre className="p-4 text-sm leading-relaxed text-gray-800 dark:text-gray-200">
          {children}
        </pre>
      </div>
    );
  },
  // code: (props) => (
  //   <code {...props} className="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800" />
  // ),
  blockquote: (props) => (
    <blockquote
      {...props}
      className="my-8 border-l-4 border-gray-200 pl-4 italic text-gray-700 dark:border-gray-700 dark:text-gray-300"
    />
  ),
  hr: (props) => (
    <hr {...props} className="my-12 border-gray-200 dark:border-gray-700" />
  ),
  em: (props) => (
    <em {...props} className="italic text-gray-900 dark:text-gray-100" />
  ),
  strong: (props) => (
    <strong {...props} className="font-bold text-gray-900 dark:text-gray-100" />
  ),
  // inlineCode: (props) => (
  //   <code {...props} className="rounded bg-gray-100 px-1.5 py-0.5 text-sm dark:bg-gray-800" />
  // ),
  table: (props) => (
    <div className="my-8 overflow-x-auto">
      <table {...props} className="min-w-full divide-y divide-gray-200 dark:divide-gray-700" />
    </div>
  ),
  th: (props) => (
    <th {...props} className="px-4 py-2 text-left font-bold text-gray-900 dark:text-gray-100" />
  ),
  td: (props) => (
    <td {...props} className="px-4 py-2 text-gray-700 dark:text-gray-300" />
  ),
};
