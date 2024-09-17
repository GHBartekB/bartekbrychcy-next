import { unstable_setRequestLocale } from 'next-intl/server';

import AllProjectsHeader from '@/components/projects/all/AllProjectsHeader';
import AllProjects from '@/components/projects/all/AllProjects';
import Contact from '@/components/common/Contact';

interface Props {
  params: { locale: string };
}
async function ProjectsPage({ params: { locale } }: Props) {
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
