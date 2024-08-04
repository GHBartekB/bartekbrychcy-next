import { unstable_setRequestLocale } from 'next-intl/server';
import HomeHeader from '@/components/homepage/HomeHeader';

interface Props {
  params: { locale: string };
}
async function IndexPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <HomeHeader />
      <main>
        <h1>main Content</h1>
      </main>
    </>
  );
}

export default IndexPage;
