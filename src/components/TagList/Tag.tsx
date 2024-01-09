import tag from './tag.module.scss';

const Tag = ({ tagType }: { tagType: string }) => {
  return (
    <>
      <div className={tag.label}>{tagType}</div>
    </>
  );
};
export default Tag;
