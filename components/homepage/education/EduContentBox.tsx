function EduContentBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-200 dark:bg-slate-800 rounded-xl shadow-2xl p-4 sm:px-8 transition hover:scale-105">
      {children}
    </div>
  );
}

export default EduContentBox;
