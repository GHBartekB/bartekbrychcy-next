import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { projectPages } from '@/config';

import ProjectHeader from '@/components/projects/single/ProjectHeader';
import ProjectDesc from '@/components/projects/single/ProjectDesc';
import Contact from '@/components/common/Contact';

interface MetaProps {
  children: React.ReactNode;
  params: {
    locale: string;
    slug: string;
  };
}

interface PageProps {
  params: { locale: string; slug: string };
}

export async function generateMetadata({
  params: { locale, slug },
}: Omit<MetaProps, 'children'>) {
  const t = await getTranslations({
    locale,
    namespace: `Projects.Single.${slug}`,
  });

  return {
    title: t('seo_title'),
  };
}

async function ProjectPage({ params: { locale, slug } }: PageProps) {
  const test = projectPages.includes(slug);

  if (!test) {
    notFound();
  }

  unstable_setRequestLocale(locale);

  return (
    <>
      <ProjectHeader slug={slug} />
      <main>
        <ProjectDesc slug={slug} />
        <Contact />
      </main>
    </>
  );
}

export default ProjectPage;
