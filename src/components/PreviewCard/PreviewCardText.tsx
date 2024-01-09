import card from './card.module.scss';

const PreviewCardText = ({ text }: { text: string }) => {
  return (
    <>
      <p className={card.text}>{text}</p>
    </>
  );
};

export default PreviewCardText;
