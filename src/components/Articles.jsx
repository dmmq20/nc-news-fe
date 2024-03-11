import { useContext, useEffect, useState } from "react";
import { ArticleContext } from "../contexts/articleContext";
import { getAllArticles } from "../api";
import ArticleCard from "./ArticleCard";
import Spinner from "./Spinner";

const Articles = () => {
  const { articles, setArticles } = useContext(ArticleContext);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    getAllArticles().then(({ articles }) => {
      setArticles(articles);
      setIsLoaded(true);
    });
  }, []);

  return isLoaded ? (
    <div>
      {articles.map((article) => {
        return (
          <div key={article.article_id}>
            <ArticleCard article={article} />
            <hr />
          </div>
        );
      })}
    </div>
  ) : (
    <Spinner />
  );
};

export default Articles;
