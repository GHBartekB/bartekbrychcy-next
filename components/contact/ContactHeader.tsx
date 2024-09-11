import { useTranslations } from 'next-intl';
import SimpleHeader from '../ui/SimpleHeader';
import HeaderTitle from '../ui/HeaderTitle';

function ContactHeader() {
  const t = useTranslations('Contact.Header');
  return (
    <SimpleHeader>
      <HeaderTitle title={t('heading')} />
    </SimpleHeader>
  );
}

export default ContactHeader;
