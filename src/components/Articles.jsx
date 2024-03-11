import { useContext, useEffect } from "react";
import { ArticleContext } from "../contexts/articleContext";
import { getAllArticles } from "../api";
import ArticleCard from "./ArticleCard";

const Articles = () => {
  const { articles, setArticles } = useContext(ArticleContext);

  useEffect(() => {
    getAllArticles().then(({ articles }) => setArticles(articles));
  }, []);

  return (
    <div>
      {articles.map((article) => {
        return <ArticleCard key={article.article_id} article={article} />;
      })}
    </div>
  );
};

export default Articles;
