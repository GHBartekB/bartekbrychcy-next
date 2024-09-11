interface Props {
  title?: string;
  icon: React.ReactNode;
}

function SectionIntro({ title, icon }: Props) {
  return (
    <div className="text-center mb-8 md:mb-16">
      {title && (
        <h2 className="uppercase tracking-wide text-2xl md:text-3xl xl:text-4xl font-bold mb-4">
          {title}
        </h2>
      )}
      <div className="flex justify-center items-center gap-x-2 text-4xl md:text-5xl xl:text-7xl">
        <span className="w-20 h-1 bg-slate-800 dark:bg-slate-200 rounded-xl" />
        {icon}
        <span className="w-20 h-1 bg-slate-800 dark:bg-slate-200 rounded-xl" />
      </div>
    </div>
  );
}

export default SectionIntro;
