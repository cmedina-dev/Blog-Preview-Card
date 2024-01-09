import card from './card.module.scss';

const PreviewCardDate = ({ date }: { date: string }) => {
  const displayedTime = new Date(date);

  return (
    <>
      <time className={card.date} dateTime={date}>
        Published{' '}
        {displayedTime.toLocaleDateString('default', { day: '2-digit' })}{' '}
        {displayedTime.toLocaleString('default', { month: 'short' })}{' '}
        {displayedTime.getFullYear()}
      </time>
    </>
  );
};

export default PreviewCardDate;
