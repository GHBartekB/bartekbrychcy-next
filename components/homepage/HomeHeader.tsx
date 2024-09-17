import { useTranslations } from 'next-intl';

import Image from 'next/image';
import avatar from '@/public/avatar.svg';
import ImgHeader from '../ui/ImgHeader';
import Container from '../ui/Container';

function HomeHeader() {
  const t = useTranslations('Index.Header');

  return (
    <ImgHeader>
      <Container>
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-y-8 md:gap-x-40">
          <div className="md:order-1">
            <h1 className="text-4xl lg:text-5xl xl:text-[72px] lg:leading-snug font-black mb-4 md:mb-8">
              {t('heading_1_1')} <br /> {t('heading_1_2')}
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[58px] font-extralight">
              {t('subheading')}
            </h2>
          </div>
          <Image
            className="max-w-80 lg:max-w-96 xl:max-w-none"
            priority
            src={avatar}
            alt={t('img_alt')}
            width={600}
            height={600}
          />
        </div>
      </Container>
    </ImgHeader>
  );
}

export default HomeHeader;
