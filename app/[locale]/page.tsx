import { unstable_setRequestLocale } from 'next-intl/server';
import HomeHeader from '@/components/homepage/HomeHeader';
import Experience from '@/components/homepage/experience/Experience';
import Works from '@/components/homepage/works/Works';
import Skills from '@/components/homepage/skills/Skills';
import Education from '@/components/homepage/education/Education';

interface Props {
  params: { locale: string };
}
async function IndexPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <HomeHeader />
      <main>
        <Works />
        <Experience />
        <Skills />
        <Education />
      </main>
    </>
  );
}

export default IndexPage;
