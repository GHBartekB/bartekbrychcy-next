import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';

import ContactHeader from '@/components/contact/ContactHeader';
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
  const t = await getTranslations({ locale, namespace: 'Contact.Seo' });

  return {
    title: t('title'),
  };
}
async function ContactPage({ params: { locale } }: PageProps) {
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
