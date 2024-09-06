import { FaBuilding } from 'react-icons/fa';

interface Props {
  position: string;
  place: string;
  dueDate: string;
  positionDesc: string;
  toRight?: boolean | number;
  isLast?: boolean;
}
function WorkStory({
  position,
  place,
  dueDate,
  positionDesc,
  toRight,
  isLast,
}: Props) {
  return (
    <div className="flex gap-x-3 sm:gap-x-8">
      <div
        className={`${toRight ? 'lg:order-3' : 'lg:order-1'}  max-w-60 sm:max-w-80 lg:text-center space-y-2 ${isLast ? '' : 'mb-8'}`}
      >
        <h3 className="uppercase text-2xl font-bold">{position}</h3>
        <h3 className="text-xl font-bold">{place}</h3>
        <p>{dueDate}</p>
        <p>{positionDesc}</p>
      </div>
      <div className="relative lg:order-2">
        <div className="relative z-10 w-12 h-12 sm:w-32 sm:h-32 text-xl sm:text-5xl border-4 bg-slate-200 dark:bg-slate-900 border-slate-900 dark:border-slate-200 rounded-full flex items-center justify-center">
          <FaBuilding />
        </div>
        {!isLast && (
          <span className="w-1 h-full bg-slate-900 dark:bg-slate-200 rounded-xl absolute top-0 left-[calc(50%-2px)]" />
        )}
      </div>
      <div className={`${toRight ? 'lg:order-1' : 'lg:order-3'} lg:w-80`} />
    </div>
  );
}

export default WorkStory;
