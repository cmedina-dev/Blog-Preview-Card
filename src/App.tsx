import "./styles/app.scss";
import PreviewCard from "./components/PreviewCard/PreviewCard";
import articleImg from "./assets/images/illustration-article.svg";

function App() {
  const tags = ["learning"];

  return (
    <>
      <PreviewCard url={articleImg} tagList={tags} />
    </>
  );
}

export default App;
