import { Pathnames, LocalePrefix } from 'next-intl/routing';

export const defaultLocale = 'pl' as const;
export const locales = ['pl', 'en'] as const;
export const contactMail = 'brychcybartlomiej@gmail.com' as const;
export const projectPages = ['cinkciarz', 'invest', 'cybergeeks', 'atkdesign'];

export const pathnames: Pathnames<typeof locales> = {
  '/': '/',
  '/about': {
    pl: '/o-mnie',
    en: '/about',
  },
  '/projects': {
    pl: '/projekty',
    en: '/projects',
  },
  '/contact': {
    pl: '/kontakt',
    en: '/contact',
  },
  '/privacy-policy': {
    pl: '/polityka-prywatnosci',
    en: '/privacy-policy',
  },
  '/cookies-policy': {
    pl: '/polityka-cookies',
    en: '/cookies-policy',
  },
  '/projects/cinkciarz': {
    pl: '/projekty/cinkciarz',
    en: '/projects/cinkciarz',
  },
  '/projects/invest': {
    pl: '/projekty/invest',
    en: '/projects/invest',
  },
  '/projects/cybergeeks': {
    pl: '/projekty/cybergeeks',
    en: '/projects/cybergeeks',
  },
  '/projects/atkdesign': {
    pl: '/projekty/atkdesign',
    en: '/projects/atkdesign',
  },
};

export const localePrefix: LocalePrefix<typeof locales> = 'always';
