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
          <div className="h-full w-11/12 flex-1 md:w-3/5">
            <div className="container mx-auto h-full min-w-full px-6 antialiased">
              <Header />
              <div className="mx-auto w-full overflow-auto px-4">
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
