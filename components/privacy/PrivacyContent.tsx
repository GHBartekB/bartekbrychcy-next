import { useTranslations } from 'next-intl';

import { MdOutlinePrivacyTip } from 'react-icons/md';

import Section from '@/components/ui/Section';
import SectionIntro from '@/components/ui/SectionIntro';
import Container from '@/components/ui/Container';

function PrivacyContent() {
  const t = useTranslations('Privacy');
  return (
    <Section light>
      <SectionIntro icon={<MdOutlinePrivacyTip />} />
      <Container>
        <p className="lg:text-xl max-w-[800px] mx-auto text-center px-4">
          {t('desc')}
        </p>
      </Container>
    </Section>
  );
}

export default PrivacyContent;
