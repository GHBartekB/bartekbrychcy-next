import { useTranslations } from 'next-intl';

import SimpleHeader from '@/components/ui/SimpleHeader';
import HeaderTitle from '@/components/ui/HeaderTitle';

function AllProjectsHeader() {
  const t = useTranslations('Projects.All');
  return (
    <SimpleHeader>
      <HeaderTitle title={t('title')} />
    </SimpleHeader>
  );
}

export default AllProjectsHeader;
