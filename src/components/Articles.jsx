import "/src/components/styles/Articles.css";
import { useContext, useEffect, useState } from "react";
import { ArticleContext } from "../contexts/articleContext";
import { getAllArticles } from "../api";
import ArticleCard from "./ArticleCard";
import Spinner from "./Spinner";
import { useParams } from "react-router-dom";

const Articles = () => {
  const { articles, setArticles } = useContext(ArticleContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showMore, setShowMore] = useState(1);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoaded(false);
    getAllArticles(topic, showMore).then(({ articles }) => {
      setArticles(articles);
      setIsLoaded(true);
    });
  }, [topic, showMore]);

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
      <div className="show-more-container">
        <span className="show-more" onClick={() => setShowMore(showMore + 1)}>
          Show more
        </span>
      </div>
    </div>
  ) : (
    <Spinner />
  );
};

export default Articles;
