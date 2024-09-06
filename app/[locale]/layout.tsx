import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';
import { ThemeProvider } from 'next-themes';

import { Inter } from 'next/font/google';
import './globals.css';

import { locales } from '@/config';

import Nav from '@/components/nav/Nav';
import Footer from '@/components/footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export async function generateMetadata({
  params: { locale },
}: Omit<RootLayoutProps, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    title: t('title'),
    description: t('desc'),
  };
}
interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NextIntlClientProvider messages={messages}>
            <Nav />
            <div>{children}</div>
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
