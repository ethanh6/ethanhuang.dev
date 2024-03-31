import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';

import { ThemeProvider } from 'next-themes';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata: Metadata = {
  title: 'Ethan Huang',
  description: 'My personal website.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={montserrat.className}>
      <body className="flex min-h-screen flex-col items-center">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="h-full w-3/5 flex-1">
            <div className="container mx-auto h-full px-6 antialiased sm:px-6 md:max-w-3xl lg:max-w-5xl">
              <Header />
              <div className="mx-auto overflow-auto px-6">{children}</div>
            </div>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
