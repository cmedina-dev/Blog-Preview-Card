import TagList from "../TagList/TagList";
import card from "./card.module.scss";
import PreviewCardImage from "./CardImage";

interface PreviewCardProps {
  url: string;
  tagList: string[];
}

const PreviewCard = (cardProps: PreviewCardProps) => {
  return (
    <>
      <div className={card.frame}>
        <PreviewCardImage url={cardProps.url} />
        <TagList tagList={cardProps.tagList} />
      </div>
    </>
  );
};

export default PreviewCard;
