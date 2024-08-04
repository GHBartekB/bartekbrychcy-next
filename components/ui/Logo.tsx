import Image from 'next/image';
import avatar from '@/public/avatar.svg';
import { Link } from '@/navigation';

interface Props {
  className?: string;
  onClick: () => void;
}

function Logo({ className, onClick }: Props) {
  return (
    <div
      className={`rounded-full w-12 overflow-hidden transition-all bg-slate-500 hover:bg-slate-400 ${className}`}
    >
      <Link
        onClick={onClick}
        className="block translate-y-1"
        href="/"
        aria-label="logo"
      >
        <Image alt="logo" width={48} height={48} src={avatar} />
      </Link>
    </div>
  );
}

export default Logo;
