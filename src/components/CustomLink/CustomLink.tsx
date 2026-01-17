import Link from 'next/link';

type Props = React.ComponentPropsWithoutRef<'a'>;

// Inline SVG icon instead of importing
const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const CustomLink = ({ href, children, ...rest }: Props) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink || isAnchorLink || true) {
    return (
      <Link {...rest} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <Link target="_blank" rel="noopener noreferrer" href={href!} {...rest}>
      {children}
      {typeof children === 'string' && (
        <ExternalLinkIcon className="ml-1 inline-block h-4 w-4" />
      )}
    </Link>
  );
};

export default CustomLink;
