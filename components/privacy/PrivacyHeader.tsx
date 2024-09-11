import { useTranslations } from 'next-intl';

import SimpleHeader from '@/components/ui/SimpleHeader';
import HeaderTitle from '@/components/ui/HeaderTitle';

function PrivacyHeader() {
  const t = useTranslations('Privacy');
  return (
    <SimpleHeader>
      <HeaderTitle title={t('title')} />
    </SimpleHeader>
  );
}

export default PrivacyHeader;
