import { useTranslations } from 'next-intl';

import { contactMail } from '@/config';

import Section from '../ui/Section';
import Container from '../ui/Container';
import FooterLink from './FooterLink';
import Copyright from './Copyright';

interface Props {
  className?: string;
}

const informationData = [
  { translationKey: 'home', link: '/' },
  { translationKey: 'about', link: '/about' },
  { translationKey: 'projects', link: '/projects' },
  { translationKey: 'contact', link: '/contact' },
];

function Footer({ className }: Props) {
  const t = useTranslations('Common');
  const styles = className ?? '';
  return (
    <footer className={`text-slate-200 bg-slate-800 ${styles}`}>
      <Section>
        <Container>
          <div className="flex flex-col gap-y-8 md:gap-y-0 md:flex-row flex-wrap justify-around">
            <ul className="space-y-2">
              {informationData.map((item) => (
                <li key={`footer${item.translationKey}`}>
                  <FooterLink link={item.link} text={t(item.translationKey)} />
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              <li className="font-bold">{t('contact_me')}</li>
              <li>
                <FooterLink text={contactMail} link={`mailto:${contactMail}`} />
              </li>
            </ul>
            <div>
              <FooterLink link="/privacy-policy" text={t('privacy_policy')} />
            </div>
            <div>
              <FooterLink link="/cookies-policy" text={t('cookies_policy')} />
            </div>
          </div>
        </Container>
      </Section>
      <Copyright />
    </footer>
  );
}

export default Footer;
