import { useTranslations } from 'next-intl';

import Image from 'next/image';
import Container from '@/components/ui/Container';
import ImgHeader from '@/components/ui/ImgHeader';
import notFoundImg from '@/public/images/not_found_img.svg';

export default function NotFoundPage() {
  const t = useTranslations('NotFoundPage');
  return (
    <ImgHeader>
      <Container>
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-y-8 md:gap-x-40">
          <div className="md:order-1">
            <h1 className="text-4xl lg:text-5xl lg:leading-snug font-black mb-4 md:mb-8">
              {t('title')}
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[58px] font-extralight">
              {t('description')}
            </h2>
          </div>
          <Image
            className="max-w-80 lg:max-w-96 xl:max-w-none"
            priority
            src={notFoundImg}
            alt=""
            width={600}
            height={600}
          />
        </div>
      </Container>
    </ImgHeader>
  );
}
