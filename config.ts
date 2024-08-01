import { Pathnames, LocalePrefix } from 'next-intl/routing';

export const defaultLocale = 'pl' as const;
export const locales = ['pl', 'en'] as const;
export const contactMail = 'brychcybartlomiej@gmail.com' as const;

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
};

export const localePrefix: LocalePrefix<typeof locales> = 'always';
