import { useTranslations } from 'next-intl';

import Image from 'next/image';
import { projectPages } from '@/config';

import atkIMG from '@/public/images/atk_all.png';
import investIMG from '@/public/images/invest_all.png';
import cybergeeksIMG from '@/public/images/cg_all.png';
import cinkciarzIMG from '@/public/images/ck_all.png';

import Section from '@/components/ui/Section';
import Container from '@/components/ui/Container';
import BackToProjects from './BackToProjects';
import ShortDesc from './ShortDesc';
import ProjectDescIntro from './ProjectDescIntro';
import MoveToProject from './MoveToProject';

const images = {
  cinkciarz: cinkciarzIMG,
  invest: investIMG,
  cybergeeks: cybergeeksIMG,
  atkdesign: atkIMG,
};

function ProjectDesc({ slug }: { slug: string }) {
  const img = images[slug as keyof typeof images];
  const t = useTranslations(`Projects.Single.${slug}`);
  const startIndex = projectPages.indexOf(slug);
  return (
    <Section light>
      <Container>
        <BackToProjects />
        <div className="flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-x-20 mb-16">
          <div className="md:order-1 lg:max-w-[600px]">
            <ShortDesc
              clientName={t('client_name')}
              link={t('link')}
              linkText={t('link_text')}
              technologies={t('technologies')}
            />
          </div>
          <Image
            className="max-w-64 sm:max-w-80 lg:max-w-96"
            priority
            src={img}
            alt={t('img_alt')}
            width={600}
            height={600}
          />
        </div>
        <ProjectDescIntro />
        <div className="max-w-[920px] mx-auto mb-8 lg:mb-16">
          <p className="text-center lg:text-xl">{t('desc')}</p>
        </div>
      </Container>
      <hr className="my-8 lg:my-16 h-0.5 bg-slate-500 dark:bg-slate-50" />
      <Container>
        <MoveToProject startIndex={startIndex} />
      </Container>
    </Section>
  );
}

export default ProjectDesc;
