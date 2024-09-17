import { unstable_setRequestLocale } from 'next-intl/server';

import PrivacyHeader from '@/components/privacy/PrivacyHeader';
import PrivacyContent from '@/components/privacy/PrivacyContent';
import Contact from '@/components/common/Contact';

interface Props {
  params: { locale: string };
}
async function PrivacyPage({ params: { locale } }: Props) {
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
