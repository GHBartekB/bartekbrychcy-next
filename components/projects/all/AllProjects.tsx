import { GrProjects } from 'react-icons/gr';

import Section from '@/components/ui/Section';
import SectionIntro from '@/components/ui/SectionIntro';
import Container from '@/components/ui/Container';
import ProjectCard from '@/components/common/ProjectCard';

const projectKeys = [
  { key: 'cinkciarz', bgClass: "bg-[url('/images/ck_bgc.png')]" },
  { key: 'invest', bgClass: "bg-[url('/images/invest_bgc.png')]" },
  { key: 'cybergeeks', bgClass: "bg-[url('/images/cg_bgc.png')]" },
  { key: 'atkdesign', bgClass: "bg-[url('/images/atk_bgc.png')]" },
];

function AllProjects() {
  return (
    <Section light>
      <SectionIntro icon={<GrProjects />} />
      <Container>
        <div className="flex flex-wrap max-w-[1120px] mx-auto justify-center py-8 lg:py-16 gap-12">
          {projectKeys.map((item) => (
            <ProjectCard
              key={item.key}
              link={`/projects/${item.key}`}
              linkText={item.key}
              bgClass={item.bgClass}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default AllProjects;
