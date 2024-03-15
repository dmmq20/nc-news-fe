import "./App.css";
import ArticlePage from "./components/ArticlePage";
import Articles from "./components/Articles";
import { Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./contexts/userContext";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

const App = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <Routes>
      {currentUser ? (
        <>
          <Route path="/" element={<Articles />} />
          <Route path="/articles/:topic" element={<Articles />} />
          <Route path="/article/:article_id" element={<ArticlePage />} />
        </>
      ) : (
        <Route path="/" element={<Navigate to="/login" />} />
      )}
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/404" element={<NotFound />} />
    </Routes>
  );
};

export default App;
