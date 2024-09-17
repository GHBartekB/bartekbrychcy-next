import { useTranslations } from 'next-intl';

import { LiaCookieSolid } from 'react-icons/lia';

import Section from '@/components/ui/Section';
import SectionIntro from '@/components/ui/SectionIntro';
import Container from '@/components/ui/Container';

function CookiesContent() {
  const t = useTranslations('Cookies.Policy');
  return (
    <Section light>
      <SectionIntro icon={<LiaCookieSolid />} />
      <Container>
        <p className="lg:text-xl max-w-[800px] mx-auto text-center px-4">
          {t('desc')}
        </p>
      </Container>
    </Section>
  );
}

export default CookiesContent;
