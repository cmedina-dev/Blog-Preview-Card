import './styles/app.scss';
import PreviewCard from './components/PreviewCard/PreviewCard';
import articleImg from './assets/images/illustration-article.svg';

function App() {
  const tags = ['Learning'];
  const text =
    'These languages are the backbone of every website, defining structure, content, and presentation.';

  return (
    <>
      <PreviewCard
        url={articleImg}
        tagList={tags}
        date="2023-12-22"
        title="HTML & CSS foundations"
        text={text}
      />
    </>
  );
}

export default App;
