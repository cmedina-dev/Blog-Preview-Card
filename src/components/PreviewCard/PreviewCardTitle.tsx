import card from './card.module.scss';

const PreviewCardTitle = ({ title }: { title: string }) => {
  return (
    <>
      <a className={card.link} href="#">
        <h1 className={card.title}>{title}</h1>
      </a>
    </>
  );
};

export default PreviewCardTitle;
