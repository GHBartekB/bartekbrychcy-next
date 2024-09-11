import { useTranslations } from 'next-intl';

function ContactHeader() {
  const t = useTranslations('Contact.Header');
  return (
    <header className="py-8 text-slate-200 bg-slate-700 dark:bg-slate-950">
      <h1 className="text-3xl text-center uppercase leading-snug">
        {t('heading')}
      </h1>
    </header>
  );
}

export default ContactHeader;
