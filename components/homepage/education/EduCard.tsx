function EduCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-slate-800 dark:bg-slate-200 space-y-8 py-12 px-4 sm:px-8 w-11/12 max-w-96 shadow-2xl rounded-2xl">
      {children}
    </div>
  );
}

export default EduCard;
