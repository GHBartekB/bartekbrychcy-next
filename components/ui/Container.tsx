import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  className?: string;
}

function Container({ children, className }: Props) {
  const additionalStyles = className ?? '';
  return (
    <div className={`container px-4 mx-auto ${additionalStyles}`}>
      {children}
    </div>
  );
}

export default Container;
