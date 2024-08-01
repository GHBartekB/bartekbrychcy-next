import { useTranslations } from 'next-intl';

import { FaFolderOpen } from 'react-icons/fa6';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import MainProjects from '@/components/common/MainProjects';
import SectionIntro from '../SectionIntro';

function Works() {
  const t = useTranslations('Index.Works');
  return (
    <Section light>
      <Container>
        <SectionIntro title={t('title')} icon={<FaFolderOpen />} />
        <MainProjects />
      </Container>
    </Section>
  );
}

export default Works;
