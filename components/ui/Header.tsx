function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="pt-8 md:pt-16 bg-slate-700 dark:bg-slate-950 text-slate-100 text-center md:text-left overflow-hidden">
      {children}
    </header>
  );
}

export default Header;
