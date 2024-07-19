import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import Container from '@/components/ui/Container';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bartek Brychcy',
  description: 'Portfolio CV Projekty',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Container>Nawigacja</Container>
        </nav>
        <div>{children}</div>
        <footer>
          <Container>Stopka</Container>
        </footer>
      </body>
    </html>
  );
}
