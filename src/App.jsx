import "./App.css";
import ArticlePage from "./components/ArticlePage";
import Articles from "./components/Articles";
import { Route, Routes } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./contexts/userContext";
import Navbar from "./components/Navbar";
import Login from "./components/Login";

const App = () => {
  const { currentUser } = useContext(UserContext);

  return currentUser ? (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Articles />} />
        <Route path="/articles/:topic" element={<Articles />} />
        <Route path="/article/:article_id" element={<ArticlePage />} />
      </Routes>
    </>
  ) : (
    <Login />
  );
};

export default App;
