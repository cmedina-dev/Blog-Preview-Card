import tag from "./tag.module.scss";

const TagList = ({ tagList }: { tagList: string[] }) => {
  return (
    <>
      <div className={tag.tagList}></div>
    </>
  );
};

export default TagList;
