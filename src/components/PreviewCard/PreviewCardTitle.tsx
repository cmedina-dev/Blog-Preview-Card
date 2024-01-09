import card from './card.module.scss';

const PreviewCardTitle = ({ title }: { title: string }) => {
  return (
    <>
      <h1 className={card.title}>{title}</h1>
    </>
  );
};

export default PreviewCardTitle;
