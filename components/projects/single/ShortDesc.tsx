import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';

interface Props {
  clientName: string;
  link: string;
  linkText: string;
  technologies: string;
}

function ShortDesc({ clientName, link, linkText, technologies }: Props) {
  const t = useTranslations('Projects.Common');
  return (
    <div className="space-y-2 text-lg">
      <p>
        {t('client')} <strong>{clientName}</strong>
      </p>
      <p>
        {t('link_desc')}
        <Link
          className="font-bold text-cyan-500 dark:text-cyan-300 hover:text-cyan-700 dark:hover:text-cyan-500"
          href={link}
        >
          {linkText}
        </Link>
      </p>
      <p>
        {t('technologies_used')} <strong>{technologies}</strong>
      </p>
    </div>
  );
}

export default ShortDesc;
