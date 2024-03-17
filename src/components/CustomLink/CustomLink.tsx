import Link from 'next/link';

import ExternalLinkIcon from './external-link.svg';

type Props = React.ComponentPropsWithoutRef<'a'>;

const CustomLink = ({ href, children, ...rest }: Props) => {
  const isInternalLink = href && href.startsWith('/');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink || isAnchorLink) {
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
