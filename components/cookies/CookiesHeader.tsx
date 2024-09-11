import { useTranslations } from 'next-intl';

import SimpleHeader from '@/components/ui/SimpleHeader';
import HeaderTitle from '@/components/ui/HeaderTitle';

function CookiesHeader() {
  const t = useTranslations('Cookies.Policy');
  return (
    <SimpleHeader>
      <HeaderTitle title={t('title')} />
    </SimpleHeader>
  );
}

export default CookiesHeader;
