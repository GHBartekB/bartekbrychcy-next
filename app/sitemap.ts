import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://bartekbrychcy.pl',
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: 'https://bartekbrychcy.pl/pl',
          en: 'https://bartekbrychcy.pl/en',
        },
      },
    },
    {
      url: 'https://bartekbrychcy.pl/about',
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: 'https://bartekbrychcy.pl/pl/about',
          en: 'https://bartekbrychcy.pl/en/about',
        },
      },
    },
    {
      url: 'https://bartekbrychcy.pl/projects',
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: 'https://bartekbrychcy.pl/pl/projects',
          en: 'https://bartekbrychcy.pl/en/projects',
        },
      },
    },
    {
      url: 'https://bartekbrychcy.pl/contact',
      lastModified: new Date(),
      alternates: {
        languages: {
          pl: 'https://bartekbrychcy.pl/pl/contact',
          en: 'https://bartekbrychcy.pl/en/contact',
        },
      },
    },
  ];
}
