import Link from 'next/link';
import Image from 'next/image';

export const CustomMdxComponent = {
  h1: ({ children }) => (
    <div className="mb-6 border-b border-gray-300 py-4 text-3xl font-bold text-black">
      {children}
    </div>
  ),
  h2: ({ children }) => (
    <div className="mb-6 border-b border-gray-200 py-4 text-2xl font-bold text-black">
      {children}
    </div>
  ),
  h3: ({ children }) => (
    <div className="mb-4 mt-8 text-2xl font-bold">{children}</div>
  ),
  h4: ({ children }) => (
    <div className="mb-4 mt-6 text-xl font-bold">{children}</div>
  ),
  h5: ({ children }) => (
    <div className="mb-2 mt-4 text-lg font-bold">{children}</div>
  ),
  h6: ({ children }) => (
    <div className="mb-2 mt-4 text-sm font-bold text-gray-700">{children}</div>
  ),
  p: (props) => <p {...props} className="mb-4" />,
  a: ({ href, children, ...props }) => {
    // Check if it's an internal link
    const isInternal = href && (href.startsWith('/') || href.startsWith('#'));

    // If it's an internal link, use Next.js's Link component
    if (isInternal) {
      return (
        <Link {...props} href={href} className="mb-4">
          {children}
        </Link>
      );
    }

    // Otherwise, render as a regular external link
    return (
      <a href={href} {...props} className="mb-4">
        {children}
      </a>
    );
  },

  img: (props) => {
    return <Image width={2000} height={500} {...(props as ImageProps)} />;
  },

  ol: (props) => <ol {...props} className="mb-4 list-inside list-decimal" />,
  ul: (props) => <ul {...props} className="mb-4 list-inside list-disc" />,
  li: (props) => <li {...props} className="mb-2" />,

  pre: ({ children }) => {
    return (
      <pre className="my-4 rounded-md border-2 border-zinc-400 p-4 hover:border-zinc-800">
        {children}
      </pre>
    );
  },

  // code: (props) => (
  //   <code {...props} className="rounded-md px-2 bg-gray-100 py-1" />
  // ),

  blockquote: (props) => (
    <blockquote
      {...props}
      className="mb-4 border-l-4 border-gray-300 py-2 pl-4 italic"
    />
  ),

  hr: (props) => <hr {...props} className="my-8 border-gray-300" />,

  em: (props) => <em {...props} className="italic" />,

  strong: (props) => <strong {...props} className="font-bold" />,

  inlineCode: (props) => (
    <code {...props} className="rounded-sm bg-gray-100 px-1" />
  ),
};
