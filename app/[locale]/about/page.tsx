import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';

import AboutHeader from '@/components/about/AboutHeader';
import AboutIntro from '@/components/about/AboutIntro';
import Faq from '@/components/about/faq/Faq';
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
  const t = await getTranslations({ locale, namespace: 'About.Seo' });

  return {
    title: t('title'),
  };
}

async function AboutPage({ params: { locale } }: PageProps) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <AboutHeader />
      <main>
        <AboutIntro />
        <Faq />
        <Contact />
      </main>
    </>
  );
}

export default AboutPage;
