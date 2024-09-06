import { useTranslations } from 'next-intl';

import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaFacebook, FaDiscord, FaLightbulb } from 'react-icons/fa';

import { Link } from '@/navigation';
import Section from '../ui/Section';
import Container from '../ui/Container';
import SectionIntro from '../homepage/SectionIntro';

const items = [
  {
    textKey: 'brychcybartlomiej@gmail.com',
    link: 'mailto:brychcybartlomiej@gmail.com',
    icon: <MdEmail />,
  },
  {
    textKey: 'LinkedIn',
    link: 'https://www.linkedin.com/in/bartlomiej-brychcy/',
    icon: <FaLinkedin className="text-3xl" />,
  },
  {
    textKey: 'Facebook',
    link: 'https://www.facebook.com/BrychcyBartlomiej',
    icon: <FaFacebook />,
  },
  {
    textKey: '#bartekbrychcy',
    link: 'https://discord.com/',
    icon: <FaDiscord />,
  },
];

function Contact() {
  const t = useTranslations('Common.Contact');
  return (
    <Section>
      <SectionIntro icon={<FaLightbulb />} />
      <Container className="text-center">
        <div className="mb-8 md:mb-16 font-extrabold">
          <h2 className="text-3xl md:text-4xl mb-8">{t('heading')}</h2>
          <h2 className="text-2xl md:text-3xl">{t('subheading')}</h2>
        </div>
        <div className="inline-flex flex-col lg:flex-row gap-2">
          {items.map((item) => (
            <div
              key={item.textKey}
              className="flex flex-col lg:flex-row flex-wrap items-center gap-2 sm:gap-4 sm:text-xl text-wrap transition lg:hover:bg-slate-50 lg:hover:text-slate-800 rounded-md p-2"
            >
              <span className="text-3xl">{item.icon}</span>
              <Link
                className="hover:underline lg:hover:no-underline"
                href={item.link}
              >
                {item.textKey}
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Contact;
