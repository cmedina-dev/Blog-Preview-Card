import { useState } from "react";
import "./styles/app.scss";
import PreviewCard from "./components/PreviewCard/PreviewCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <PreviewCard />
    </>
  );
}

export default App;
