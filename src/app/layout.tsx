import type { Metadata } from 'next';
import { Montserrat, Baskervville, Overlock } from 'next/font/google';
import './globals.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';

import { ThemeProvider } from 'next-themes';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const baskervville = Baskervville({
  weight: '400',
  subsets: ['latin'],
});

const overlock = Overlock({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Ethan Huang',
    default: 'Ethan Huang',
  },
  description: 'My personal website.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={overlock.className}>
      <body className="flex min-h-screen flex-col items-center">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
          enableColorScheme={true}
        >
          <div className="h-full w-full max-w-3xl flex-1">
            <div className="mx-auto h-full w-full px-4 antialiased sm:px-6 lg:px-8">
              <Header />
              <div className="prose dark:prose-dark mx-auto w-full max-w-none overflow-auto text-[18px]">
                {children}
              </div>
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
