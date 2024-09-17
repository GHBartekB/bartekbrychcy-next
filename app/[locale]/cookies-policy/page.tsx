import { unstable_setRequestLocale } from 'next-intl/server';

import CookiesHeader from '@/components/cookies/CookiesHeader';
import CookiesContent from '@/components/cookies/CookiesContent';
import Contact from '@/components/common/Contact';

interface Props {
  params: { locale: string };
}
async function CookiesPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <CookiesHeader />
      <main className="min-h-[50vh]">
        <CookiesContent />
        <Contact />
      </main>
    </>
  );
}

export default CookiesPage;
