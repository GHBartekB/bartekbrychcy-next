import { unstable_setRequestLocale } from 'next-intl/server';

import ContactHeader from '@/components/contact/ContactHeader';
import Contact from '@/components/common/Contact';

interface Props {
  params: { locale: string };
}
async function ContactPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <ContactHeader />
      <main className="py-8">
        <Contact />
      </main>
    </>
  );
}

export default ContactPage;
