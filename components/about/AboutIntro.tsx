import { useTranslations } from 'next-intl';
import { FaAngleDown } from 'react-icons/fa';

import Section from '../ui/Section';
import Container from '../ui/Container';
import SectionIntro from '../homepage/SectionIntro';

function AboutIntro() {
  const t = useTranslations('About.Intro');
  return (
    <Section>
      <SectionIntro title={t('title')} icon={<FaAngleDown />} />
      <Container className="max-w-[920px] text-center">
        <p className="mb-4">{t('desc_1')}</p>
        <p>{t('desc_2')}</p>
      </Container>
    </Section>
  );
}

export default AboutIntro;
