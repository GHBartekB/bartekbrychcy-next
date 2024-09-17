import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

import { projectPages } from '@/config';

interface Props {
  startIndex: number;
}

function MoveToProject({ startIndex }: Props) {
  const t = useTranslations('Projects.Common');
  const nextIndex = startIndex + 1;
  const previousIndex = startIndex - 1;

  return (
    <div className="flex justify-between gap:4 lg:gap-8 flex-wrap py-8 lg:text-xl lg:text-right">
      {previousIndex >= 0 && (
        <Link
          className="flex flex-col p-2 hover:text-cyan-700 dark:hover:text-cyan-500"
          href={`/projects/${projectPages[previousIndex]}`}
        >
          <p>{t('previous_project')}</p>
          <p className="font-bold uppercase">{projectPages[previousIndex]}</p>
        </Link>
      )}
      {projectPages.length > nextIndex && (
        <Link
          className="ml-auto flex flex-col p-2 hover:text-cyan-700 dark:hover:text-cyan-500"
          href={`/projects/${projectPages[nextIndex]}`}
        >
          <p>{t('next_project')}</p>
          <p className="font-bold uppercase">{projectPages[nextIndex]}</p>
        </Link>
      )}
    </div>
  );
}

export default MoveToProject;
