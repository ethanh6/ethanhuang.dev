import clsx from 'clsx';

import Facebook from './facebook.svg';
import Github from './github.svg';
import Linkedin from './linkedin.svg';
import Mail from './mail.svg';
import Medium from './medium.svg';
import Twitter from './twitter.svg';

type SVGComponent = React.FC<React.SVGProps<SVGSVGElement>>;

const components: { [key: string]: SVGComponent } = {
  mail: Mail as SVGComponent,
  github: Github as SVGComponent,
  linkedin: Linkedin as SVGComponent,
  medium: Medium as SVGComponent,
  facebook: Facebook as SVGComponent,
};

type Props = {
  kind: 'mail' | 'github' | 'facebook' | 'linkedin' | 'medium';
  href: string;
};

const SocialIcon = ({ kind, href }: Props) => {
  const SocialSvg = components[kind];

  return (
    <a
      className="text-sm text-gray-500 transition-colors hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={clsx(
          'h-6 w-6 fill-current text-gray-600 transition-colors dark:text-gray-200',
          kind === 'mail' && 'dark:hover:text-primary-400 hover:text-amber-300',
          kind === 'github' && 'hover:text-gray-300 dark:hover:text-gray-400',
          kind === 'facebook' &&
            'hover:text-[#4267B2] dark:hover:text-[#4267B2]',
          kind === 'linkedin' &&
            'hover:text-[#0e76a8] dark:hover:text-[#0e76a8]',
          kind === 'medium' && 'hover:text-gray-500 dark:hover:text-gray-400',
        )}
      />
    </a>
  );
};

export default SocialIcon;
