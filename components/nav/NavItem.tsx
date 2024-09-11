'use-client';

import { FaHome } from 'react-icons/fa';
import { useSelectedLayoutSegments } from 'next/navigation';
import { Link } from '@/navigation';

interface Props {
  text: string;
  link: string;
  onClick: () => void;
}

function NavItem({ text, link, onClick }: Props) {
  const segments = useSelectedLayoutSegments();
  const pathname = segments.length ? `/${segments.join('/')}` : '/';
  const isActive = pathname === link;

  return (
    <li
      className={`transition-all text-slate-50 ${isActive ? 'text-slate-800 bg-slate-300' : ''} hover:text-slate-800 hover:bg-slate-300 cursor-pointer rounded-md`}
    >
      {link === '/' ? (
        <Link
          onClick={onClick}
          className="flex max-md:justify-between items-center p-2 gap-x-4"
          href={link}
        >
          <span>{text}</span>
          <FaHome size={24} />
        </Link>
      ) : (
        <Link onClick={onClick} className="block w-full h-full p-2" href={link}>
          {text}
        </Link>
      )}
    </li>
  );
}

export default NavItem;
