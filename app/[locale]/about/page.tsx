import { unstable_setRequestLocale } from 'next-intl/server';
import AboutHeader from '@/components/about/AboutHeader';
import AboutIntro from '@/components/about/AboutIntro';
import Faq from '@/components/about/faq/Faq';
import Contact from '@/components/common/Contact';

interface Props {
  params: { locale: string };
}
async function AboutPage({ params: { locale } }: Props) {
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
