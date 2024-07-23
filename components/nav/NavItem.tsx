'use-client';

import { FaHome } from 'react-icons/fa';
import { useSelectedLayoutSegment } from 'next/navigation';
import { Link } from '@/navigation';

interface Props {
  text: string;
  link: string;
}

function NavItem({ text, link }: Props) {
  const selectedLayoutSegment = useSelectedLayoutSegment();
  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';
  const isActive = pathname === link;

  return (
    <li
      className={`transition-all text-slate-50 ${isActive ? 'text-slate-800 bg-slate-300' : ''} hover:text-slate-800 hover:bg-slate-300 cursor-pointer p-2 rounded-md`}
    >
      {link === '/' ? (
        <Link
          className="flex max-md:justify-between items-center gap-x-4"
          href={link}
        >
          <span>{text}</span>
          <FaHome size={24} />
        </Link>
      ) : (
        <Link className="block w-full" href={link}>
          {text}
        </Link>
      )}
    </li>
  );
}

export default NavItem;
