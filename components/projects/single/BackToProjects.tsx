import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { IoArrowBackCircleOutline } from 'react-icons/io5';

function BackToProjects() {
  const t = useTranslations('Projects.Common');
  return (
    <Link
      className="space-x-4 flex items-center gap-x-2 mb-8 lg:mb-16 hover:text-cyan-700 dark:hover:text-cyan-500"
      href="/projects"
    >
      <IoArrowBackCircleOutline className="text-2xl" /> {t('projects')}
    </Link>
  );
}

export default BackToProjects;
