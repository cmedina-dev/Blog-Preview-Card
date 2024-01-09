import card from './card.module.scss';
import avatar from '../../assets/images/image-avatar.webp';

const PreviewCardAvatar = ({ author }: { author: string }) => {
  return (
    <>
      <div className={card.profile}>
        <img src={avatar} alt={author} />
        <span className={card.author}>{author}</span>
      </div>
    </>
  );
};

export default PreviewCardAvatar;
