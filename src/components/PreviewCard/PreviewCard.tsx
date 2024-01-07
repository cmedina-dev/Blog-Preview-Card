import card from "./card.module.scss";
import PreviewCardImage from "./CardImage";

const PreviewCard = () => {
  return (
    <>
      <div className={card.frame}>
        <PreviewCardImage />
      </div>
    </>
  );
};

export default PreviewCard;
