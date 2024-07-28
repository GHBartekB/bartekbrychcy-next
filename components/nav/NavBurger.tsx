interface Props {
  isOpen: boolean;
  onClick: () => void;
  burgerColor?: string;
}
function NavBurger({ isOpen, onClick, burgerColor }: Props) {
  const btnColor = burgerColor ?? 'bg-slate-200';
  return (
    <button
      onClick={onClick}
      className={`absolute top-0 right-2 md:hidden focus:outline-none p-2 ${isOpen ? 'mb-4' : ''}`}
      type="button"
      aria-label="burger"
    >
      <div className="relative h-6 w-8">
        <div
          className={`${isOpen ? 'transform top-1/2 translate-1/2  rotate-45' : ''} transition-transform absolute top-0 h-1 w-full rounded-sm ${btnColor}`}
        />
        <div
          className={`${isOpen ? 'opacity-0' : ''} absolute top-[calc(50%-2px)] left-0 h-1 w-full rounded-sm ${btnColor}`}
        />
        <div
          className={`${isOpen ? 'transform top-1/2 -rotate-45 translate-1/2' : 'bottom-0'} transition-transform absolute h-1 w-full rounded-sm ${btnColor}`}
        />
      </div>
    </button>
  );
}

export default NavBurger;
