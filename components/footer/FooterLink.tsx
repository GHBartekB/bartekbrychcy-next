import { Link } from '@/navigation';
import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  link: string;
  text: string;
}

function FooterLink({ link, text }: Props) {
  return (
    <Link className="hover:underline" href={link}>
      {text}
    </Link>
  );
}

export default FooterLink;
