import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
}

function Section({ children, className }: Props) {
  const styles = className ?? '';
  return <section className={`py-8 md:py-16 ${styles}`}>{children}</section>;
}

export default Section;
