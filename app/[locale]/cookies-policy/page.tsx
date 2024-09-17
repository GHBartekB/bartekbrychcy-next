import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';

import CookiesHeader from '@/components/cookies/CookiesHeader';
import CookiesContent from '@/components/cookies/CookiesContent';
import Contact from '@/components/common/Contact';

interface MetaProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: Omit<MetaProps, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'Cookies.Policy.Seo' });

  return {
    title: t('title'),
  };
}
async function CookiesPage({ params: { locale } }: PageProps) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <CookiesHeader />
      <main>
        <CookiesContent />
        <Contact />
      </main>
    </>
  );
}

export default CookiesPage;
