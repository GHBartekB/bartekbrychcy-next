import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from 'next-themes';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Nav from '@/components/nav/Nav';
import Container from '@/components/ui/Container';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bartek Brychcy',
  description: 'Portfolio CV Projekty',
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider messages={messages}>
            <Nav />
            <div>{children}</div>
            <footer>
              <Container>Stopka</Container>
            </footer>
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
