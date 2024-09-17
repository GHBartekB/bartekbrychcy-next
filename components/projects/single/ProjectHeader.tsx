import { useTranslations } from 'next-intl';

import SimpleHeader from '@/components/ui/SimpleHeader';
import HeaderTitle from '@/components/ui/HeaderTitle';

function ProjectHeader({ slug }: { slug: string }) {
  const t = useTranslations(`Projects.Single.${slug}`);
  return (
    <SimpleHeader>
      <HeaderTitle title={t('title')} />
    </SimpleHeader>
  );
}

export default ProjectHeader;
