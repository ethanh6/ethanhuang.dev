import CustomLink from '@/components/CustomLink';
import MobileNav from '@/components/MobileNav';
import SectionContainer from '@/components/SectionContainer';
import ThemeSwitch from '@/components/ThemeSwitch';
import { headerConfigs } from '@/configs/headerConfigs';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b-2 border-slate-900/10 pb-4 pt-4 transition-colors dark:border-slate-50/[0.06] dark:bg-gray-900/60">
      <SectionContainer>
        <div className="flex items-baseline justify-between">
          <div>
            <CustomLink
              href="/"
              aria-label={headerConfigs.title}
              className="flex h-6 items-center justify-between text-2xl font-semibold sm:block"
            >
              {headerConfigs.title}
            </CustomLink>
          </div>
          <div className="flex items-center text-base sm:gap-1">
            <div className="hidden gap-1 sm:flex">
              {headerConfigs.navLinks.map((link, i) => (
                <CustomLink
                  key={i}
                  href={link.href}
                  className="rounded p-3 font-medium text-gray-900 transition-colors hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-800"
                >
                  {link.title}
                </CustomLink>
              ))}
              <div className="p-3">
                <ThemeSwitch />
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </header>
  );
}
