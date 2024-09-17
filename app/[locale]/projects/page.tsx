import { unstable_setRequestLocale, getTranslations } from 'next-intl/server';

import AllProjectsHeader from '@/components/projects/all/AllProjectsHeader';
import AllProjects from '@/components/projects/all/AllProjects';
import Contact from '@/components/common/Contact';

interface MetaProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

interface PageProps {
  params: { locale: string };
}

export async function generateMetadata({
  params: { locale },
}: Omit<MetaProps, 'children'>) {
  const t = await getTranslations({ locale, namespace: 'Projects.All.Seo' });

  return {
    title: t('title'),
  };
}

async function ProjectsPage({ params: { locale } }: PageProps) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <AllProjectsHeader />
      <main>
        <AllProjects />
        <Contact />
      </main>
    </>
  );
}

export default ProjectsPage;
