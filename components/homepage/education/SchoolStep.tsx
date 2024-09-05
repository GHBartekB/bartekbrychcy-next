import EduContentBox from './EduContentBox';

interface Props {
  years: string;
  school: string;
}

function SchoolStep({ years, school }: Props) {
  return (
    <EduContentBox>
      <p>{years}</p>
      <div className="h-1 w-12 bg-slate-900 dark:bg-slate-200 mx-auto rounded-2xl my-4" />
      <p>{school}</p>
    </EduContentBox>
  );
}

export default SchoolStep;
