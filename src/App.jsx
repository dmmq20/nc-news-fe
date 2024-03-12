import ArticlePage from "./components/ArticlePage";
import Articles from "./components/Articles";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useContext } from "react";
import { UserContext } from "./contexts/userContext";
import { useEffect } from "react";

const App = () => {
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    setCurrentUser("jessjelly");
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Articles />} />
      <Route path="/articles/:article_id" element={<ArticlePage />} />
    </Routes>
  );
};

export default App;
