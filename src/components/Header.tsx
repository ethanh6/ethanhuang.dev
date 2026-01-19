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
    <header className="sticky top-0 z-10 w-full bg-background pb-4 pt-8 transition-colors">
      <div className="mx-auto w-full max-w-3xl">
        {/* Combined the flex and justify-between classes */}
        <div className="flex items-center justify-between">
          {/* Render site title */}
          <CustomLink
            href="/"
            aria-label={headerConfigs.title}
            className="hidden font-semibold transition-colors hover:text-slate-400 dark:text-[#cc7c5e] lg:block"
          >
            {headerConfigs.title}
          </CustomLink>

          <CustomLink
            href="/"
            aria-label={headerConfigs.title}
            className="block font-semibold transition-colors hover:text-slate-400 dark:text-[#cc7c5e] lg:hidden"
          >
            {'EH'}
          </CustomLink>

          {/* Render navigation links */}
          <div className="flex items-center gap-2 text-base leading-5">
            <div className="hidden md:block">
              {headerConfigs.navLinks.map((link, i) => (
                <CustomLink
                  key={i}
                  href={link.href}
                  className={`p-3 font-medium transition-colors hover:text-slate-300 ${current_path === link.title ? 'text-slate-400 underline underline-offset-8 dark:text-[#cc7c5e]' : ''} dark:text-gray-100 dark:hover:text-gray-300`}
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
