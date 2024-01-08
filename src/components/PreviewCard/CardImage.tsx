import card from "./card.module.scss";

const PreviewCardImage = ({ url }: { url: string }) => {
  return (
    <>
      <img src={url}></img>
    </>
  );
};

export default PreviewCardImage;
