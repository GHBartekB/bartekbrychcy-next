import { useTranslations } from 'next-intl';
import { FaCalendarAlt } from 'react-icons/fa';
import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import SectionIntro from '@/components/ui/SectionIntro';
import WorkStory from './WorkStory';

function Experience() {
  const t = useTranslations('Index.Experience');
  const keys = ['cinkciarz', 'bks', 'perceptus', 'seven'];
  return (
    <Section>
      <Container>
        <SectionIntro title={t('title')} icon={<FaCalendarAlt />} />
        <div className="flex flex-col items-center">
          {keys.map((transKey, index) => (
            <WorkStory
              key={t(`${transKey}.place`)}
              position={t(`${transKey}.position`)}
              place={t(`${transKey}.place`)}
              dueDate={t(`${transKey}.due_date`)}
              positionDesc={t(`${transKey}.position_desc`)}
              toRight={index % 2}
              isLast={index === keys.length - 1}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Experience;
