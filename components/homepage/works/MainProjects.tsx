import { useTranslations } from 'next-intl';

import { Link } from '@/navigation';
import ProjectCard from '@/components/common/ProjectCard';

const projectKeys = [
  { key: 'cinkciarz', bgClass: "bg-[url('/images/ck_bgc.png')]" },
  { key: 'invest', bgClass: "bg-[url('/images/invest_bgc.png')]" },
  { key: 'cybergeeks', bgClass: "bg-[url('/images/cg_bgc.png')]" },
];

function MainProjects() {
  const t = useTranslations('Common');
  return (
    <div className="text-center">
      <div className="flex flex-col gap-x-16 gap-y-8 max-w-[992px] mx-auto lg:flex-row justify-center items-center mb-16">
        {projectKeys.map((item) => (
          <ProjectCard
            key={item.key}
            link={`/projects/${item.key}`}
            linkText={item.key}
            bgClass={item.bgClass}
          />
        ))}
      </div>
      <Link
        href="/projects"
        className="inline-flex py-4 px-6 text-slate-50 rounded-md shadow-md hover:shadow-2xl transition-all bg-slate-700 hover:bg-slate-900"
      >
        {t('see_more')}
      </Link>
    </div>
  );
}

export default MainProjects;
