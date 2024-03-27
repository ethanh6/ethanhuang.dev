import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';

import SectionContainer from '@/components/SectionContainer';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';

import { ThemeProvider } from 'next-themes';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
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
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen w-full flex-col justify-between">
            <Header />
            <SectionContainer>
              <div className="min-h-screen min-w-full bg-background antialiased">
                {children}
              </div>
            </SectionContainer>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
