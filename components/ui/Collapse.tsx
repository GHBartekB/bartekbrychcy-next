import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  isOpen: boolean;
  className: string;
}

function Collapse({ children, isOpen, className }: Props) {
  const styles = className ?? '';
  return (
    <div
      className={`grid transition-all ${isOpen ? 'grid-rows-1fr' : 'grid-rows-0fr'} ${styles}`}
    >
      <div className="overflow-hidden">{children}</div>
    </div>
  );
}

export default Collapse;
