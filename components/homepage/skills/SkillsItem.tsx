interface Props {
  skillsList: { icon: React.ReactNode; text: string }[];
  title: string;
  className?: string;
}

function SkillsItem({ skillsList, title, className }: Props) {
  const styles = className || undefined;
  return (
    <div className={styles}>
      <h3 className="text-center text-2xl mb-12 font-semibold">{title}</h3>
      <div className="max-w-[992px] mx-auto flex flex-wrap justify-center items-center gap-8">
        {skillsList.map((item) => (
          <div
            key={item.text}
            className="flex flex-col text-center items-center text-5xl"
          >
            {item.icon}
            <span className="uppercase text-sm md:text-xl mt-2">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillsItem;
