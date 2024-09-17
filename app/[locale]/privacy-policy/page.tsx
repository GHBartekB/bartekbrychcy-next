import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';

import PrivacyHeader from '@/components/privacy/PrivacyHeader';
import PrivacyContent from '@/components/privacy/PrivacyContent';
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
  const t = await getTranslations({ locale, namespace: 'Privacy.Seo' });

  return {
    title: t('title'),
  };
}
async function PrivacyPage({ params: { locale } }: PageProps) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <PrivacyHeader />
      <main>
        <PrivacyContent />
        <Contact />
      </main>
    </>
  );
}

export default PrivacyPage;
