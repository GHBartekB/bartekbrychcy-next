import { useTranslations } from 'next-intl';

import { PiProjectorScreenLight } from 'react-icons/pi';
import SectionIntro from '@/components/ui/SectionIntro';

function ProjectDescIntro() {
  const t = useTranslations('Projects.Common');
  return (
    <SectionIntro title={t('work_scope')} icon={<PiProjectorScreenLight />} />
  );
}
export default ProjectDescIntro;
