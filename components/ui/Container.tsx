import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
}

function Container({ children, className }: Props) {
  return <div className={`container mx-auto ${className}`}>{children}</div>;
}

export default Container;
