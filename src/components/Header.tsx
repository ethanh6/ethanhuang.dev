'use client';
import CustomLink from '@/components/CustomLink';
import MobileNav from '@/components/MobileNav';
import { ThemeSwitch } from '@/components/ThemeSwitch';
import { headerConfigs } from '@/configs/headerConfigs';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  // Simplified logic to extract current path
  const current_path = usePathname().split('/')[1] || 'home';

  return (
    <header className="top-0 z-10 w-full py-8 transition-colors">
      <div className="container mx-auto px-4 md:max-w-3xl lg:max-w-5xl">
        {/* Combined the flex and justify-between classes */}
        <div className="flex items-center justify-between">
          {/* Render site title */}
          <CustomLink
            href="/"
            aria-label={headerConfigs.title}
            className="hidden font-semibold transition-colors hover:text-slate-400 lg:block"
          >
            {headerConfigs.title}
          </CustomLink>

          <CustomLink
            href="/"
            aria-label={headerConfigs.title}
            className="block font-semibold transition-colors hover:text-slate-400 lg:hidden"
          >
            {'EH'}
          </CustomLink>

          {/* Render navigation links */}
          <div className="flex items-center text-base leading-5">
            <div className="hidden md:block">
              {headerConfigs.navLinks.map((link, i) => (
                <CustomLink
                  key={i}
                  href={link.href}
                  className={`p-3 font-medium transition-colors hover:text-slate-300 ${current_path === link.title ? 'text-slate-400' : ''} dark:text-gray-100 dark:hover:text-gray-300`}
                >
                  {link.title}
                </CustomLink>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
