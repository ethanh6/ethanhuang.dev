'use client';
import CustomLink from '@/components/CustomLink';
import SocialIcon from '@/components/SocialIcon';
import { footerConfigs } from '@/configs/footerConfigs';

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon
            kind="mail"
            href={`mailto:${footerConfigs.socialLinks.email}`}
          />
          <SocialIcon kind="github" href={footerConfigs.socialLinks.github} />
          <SocialIcon
            kind="linkedin"
            href={footerConfigs.socialLinks.linkedin}
          />
        </div>
        <div className="mb-8 flex space-x-2 text-sm text-gray-500 transition-colors dark:text-gray-400">
          <div>{`${footerConfigs.credit} © ${new Date().getFullYear()}`}</div>
        </div>
      </div>
    </footer>
  );
}
