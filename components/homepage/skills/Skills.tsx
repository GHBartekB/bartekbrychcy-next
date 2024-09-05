import { useTranslations } from 'next-intl';

import {
  FaLaptopCode,
  FaReact,
  FaCss3Alt,
  FaHtml5,
  FaPhp,
  FaGitAlt,
  FaFigma,
  FaWordpress,
} from 'react-icons/fa';

import { SiNextdotjs, SiStrapi, SiTypescript } from 'react-icons/si';
import { IoLogoJavascript, IoLogoVue } from 'react-icons/io5';
import { TbBrandNuxt } from 'react-icons/tb';
import { BiLogoPostgresql, BiLogoTailwindCss } from 'react-icons/bi';
import { BsBootstrapFill } from 'react-icons/bs';

import Section from '../../ui/Section';
import Container from '../../ui/Container';
import SectionIntro from '../SectionIntro';
import SkillsItem from './SkillsItem';

const strongSkills = [
  { icon: <FaHtml5 />, text: 'html' },
  { icon: <FaCss3Alt />, text: 'css' },
  { icon: <IoLogoJavascript />, text: 'javascript' },
  { icon: <FaReact />, text: 'react' },
  { icon: <IoLogoVue />, text: 'vue' },
  { icon: <BiLogoTailwindCss />, text: 'tailwind' },
  { icon: <BsBootstrapFill />, text: 'bootstrap' },
  { icon: <FaGitAlt />, text: 'git' },
  { icon: <FaFigma />, text: 'figma' },
];

const softSkills = [
  { icon: <SiTypescript />, text: 'typescript' },
  { icon: <SiNextdotjs />, text: 'next' },
  { icon: <TbBrandNuxt />, text: 'nuxt' },
  { icon: <BiLogoPostgresql />, text: 'postgresql' },
  { icon: <SiStrapi />, text: 'strapi' },
  { icon: <FaPhp />, text: 'php' },
  { icon: <FaWordpress />, text: 'wordpress' },
];

function Skills() {
  const t = useTranslations('Index.Skills');

  return (
    <Section light>
      <Container>
        <SectionIntro title={t('title')} icon={<FaLaptopCode />} />
        <SkillsItem
          skillsList={strongSkills}
          title={t('core')}
          className="mb-16"
        />
        <SkillsItem skillsList={softSkills} title={t('developing')} />
      </Container>
    </Section>
  );
}

export default Skills;
