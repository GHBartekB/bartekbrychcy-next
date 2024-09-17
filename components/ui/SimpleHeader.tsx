function SimpleHeader({ children }: { children: React.ReactNode }) {
  return (
    <header className="py-8 text-slate-200 bg-slate-700 dark:bg-slate-950">
      {children}
    </header>
  );
}

export default SimpleHeader;
