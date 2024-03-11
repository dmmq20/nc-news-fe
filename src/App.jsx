import ArticlePage from "./components/ArticlePage";
import Articles from "./components/Articles";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Spinner from "./components/Spinner";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Articles />} />
      <Route path="/articles/:article_id" element={<ArticlePage />} />
    </Routes>
  );
};

export default App;
