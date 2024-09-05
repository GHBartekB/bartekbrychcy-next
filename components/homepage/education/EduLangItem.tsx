import EduContentBox from './EduContentBox';

interface Props {
  text: string;
}

function EduLangItem({ text }: Props) {
  return (
    <EduContentBox>
      <p>{text}</p>
    </EduContentBox>
  );
}

export default EduLangItem;
