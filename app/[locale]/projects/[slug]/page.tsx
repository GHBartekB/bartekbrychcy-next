import { unstable_setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';

import { projectPages } from '@/config';

import ProjectHeader from '@/components/projects/single/ProjectHeader';
import ProjectDesc from '@/components/projects/single/ProjectDesc';
import Contact from '@/components/common/Contact';

interface Props {
  params: { locale: string; slug: string };
}

async function ProjectPage({ params: { locale, slug } }: Props) {
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
