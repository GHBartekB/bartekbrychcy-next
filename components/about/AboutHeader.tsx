import { useTranslations } from 'next-intl';

import heroImg from '@/public/images/about_hero.svg';
import Image from 'next/image';
import Header from '../ui/Header';
import Container from '../ui/Container';

function AboutHeader() {
  const t = useTranslations('About.Header');
  return (
    <Header>
      <Container>
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-y-8 md:gap-x-40">
          <div className="md:order-1">
            <h2 className="text-4xl lg:text-5xl xl:text-[72px] lg:leading-snug font-black mb-4 md:mb-8">
              {t('heading')}
            </h2>
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[58px] font-extralight">
              {t('subheading')}
            </h1>
          </div>
          <Image
            className="max-w-80 lg:max-w-96 xl:max-w-none"
            priority
            src={heroImg}
            alt=""
            width={600}
            height={600}
          />
        </div>
      </Container>
    </Header>
  );
}

export default AboutHeader;
