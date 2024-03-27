import CustomLink from '@/components/CustomLink';
import MobileNav from '@/components/MobileNav';
import SectionContainer from '@/components/SectionContainer';
import ThemeSwitch from '@/components/ThemeSwitch';
import { headerConfigs } from '@/configs/headerConfigs';

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/70 py-4 transition-colors dark:border-slate-50/[0.06] dark:bg-gray-900/60">
      <SectionContainer>
        <div className="flex items-baseline justify-between">
          <div>
            <CustomLink
              href="/"
              aria-label={headerConfigs.title}
              className="items-center justify-center font-semibold transition-colors hover:text-slate-400 sm:block"
            >
              {headerConfigs.title}
            </CustomLink>
          </div>
          <div className="flex items-center text-base leading-5 sm:gap-1">
            <div className="hidden gap-1 sm:flex">
              {headerConfigs.navLinks.map((link, i) => (
                <CustomLink
                  key={i}
                  href={link.href}
                  className="rounded p-3 font-medium transition-colors hover:text-slate-400 dark:text-gray-100 dark:hover:text-gray-300"
                >
                  {link.title}
                </CustomLink>
              ))}
            </div>
          </div>
        </div>
      </SectionContainer>
    </header>
  );
}
