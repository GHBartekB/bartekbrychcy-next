import { useTranslations } from 'next-intl';
import { IoMdSchool } from 'react-icons/io';

import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import SectionIntro from '../SectionIntro';
import EduCard from './EduCard';
import SchoolStep from './SchoolStep';
import EduLangItem from './EduLangItem';

const schoolKeys = ['university', 'technicalSchool'];
const langKeys = ['english', 'german', 'polish'];

function Education() {
  const t = useTranslations('Index.Education');
  return (
    <Section>
      <SectionIntro title={t('title')} icon={<IoMdSchool />} />
      <Container>
        <div className="flex flex-col max-md:items-center md:flex-row gap-12 flex-wrap justify-center text-center font-semibold">
          <EduCard>
            {schoolKeys.map((itemKey) => (
              <SchoolStep
                key={itemKey}
                years={t(`${itemKey}.years`)}
                school={t(`${itemKey}.school`)}
              />
            ))}
          </EduCard>
          <EduCard>
            <div className="space-y-8">
              {langKeys.map((itemKey) => (
                <EduLangItem key={itemKey} text={t(itemKey)} />
              ))}
            </div>
          </EduCard>
        </div>
      </Container>
    </Section>
  );
}

export default Education;
