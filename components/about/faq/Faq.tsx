import { FaQ } from 'react-icons/fa6';

import Section from '@/components/ui/Section';
import SectionIntro from '@/components/ui/SectionIntro';
import Container from '@/components/ui/Container';
import FaqList from './FaqList';

function Faq() {
  return (
    <Section light>
      <SectionIntro title="FAQ" icon={<FaQ />} />
      <Container>
        <FaqList />
      </Container>
    </Section>
  );
}

export default Faq;
