import Tag from './Tag';
import tag from './tag.module.scss';

const TagList = ({ tagList }: { tagList: string[] }) => {
  return (
    <>
      <div className={tag.tagList}>
        {tagList.map(item => (
          <Tag tagType={item} key={item} />
        ))}
      </div>
    </>
  );
};

export default TagList;
