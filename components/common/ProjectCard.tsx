import { Link } from '@/navigation';

interface Props {
  link: string;
  linkText: string;
  bgClass?: string;
}

function ProjectCard({ link, linkText, bgClass }: Props) {
  const bgStyles = bgClass ?? '';

  return (
    <Link
      href={link}
      className={`relative border-4 group ${bgStyles} bg-top bg-cover w-[260px] transition-all hover:scale-110 shadow-xl hover:shadow-2xl lg:w-1/3 rounded-2xl pt-96 overflow-hidden`}
    >
      <p className="uppercase absolute w-full bottom-0 bg-slate-800 group-hover:bg-slate-950 text-slate-200 transition-all py-4">
        {linkText}
      </p>
    </Link>
  );
}

export default ProjectCard;
