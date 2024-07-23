import { unstable_setRequestLocale } from 'next-intl/server';

interface Props {
  params: { locale: string };
}
async function ContactPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <header>header</header>
      <main>
        <h1>main Content</h1>
      </main>
    </>
  );
}

export default ContactPage;
