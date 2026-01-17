import clsx from 'clsx';
import { Mail, Github, Linkedin, Facebook, MessageCircle } from 'lucide-react';

type IconComponent = React.ComponentType<{ className?: string }>;

const components: { [key: string]: IconComponent } = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  medium: MessageCircle, // Using MessageCircle as Medium alternative
  facebook: Facebook,
};

type Props = {
  kind: 'mail' | 'github' | 'facebook' | 'linkedin' | 'medium';
  href: string;
};

const SocialIcon = ({ kind, href }: Props) => {
  const Icon = components[kind];

  return (
    <a
      className="text-sm text-gray-500 transition-colors hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <Icon
        className={clsx(
          'h-6 w-6 text-gray-600 transition-colors dark:text-gray-200',
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
