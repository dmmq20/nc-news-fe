import "/src/components/styles/Articles.css";
import { useContext, useEffect, useState } from "react";
import { ArticleContext } from "../contexts/articleContext";
import { getAllArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useParams, useSearchParams } from "react-router-dom";
import Filter from "./Filter";
import Loading from "./Loading";
import Spinner from "./Spinner";

const Articles = () => {
  const { articles, setArticles } = useContext(ArticleContext);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showMore, setShowMore] = useState(1);
  const [showMoreIsClicked, setShowMoreIsClicked] = useState(false);
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setIsLoaded(false || showMoreIsClicked);
    getAllArticles(topic, showMore, searchParams).then(({ articles }) => {
      setArticles(articles);
      setIsLoaded(true);
      setShowMoreIsClicked(false);
    });
  }, [topic, showMore, searchParams]);

  const handleShowMore = () => {
    setShowMoreIsClicked(true);
    setShowMore(showMore + 1);
  };

  return isLoaded ? (
    <div>
      <Filter searchParams={searchParams} setSearchParams={setSearchParams} />
      {articles.map((article) => {
        return (
          <div key={article.article_id}>
            <ArticleCard article={article} />
            <hr />
          </div>
        );
      })}
      <div className="show-more-container">
        {showMoreIsClicked ? (
          <Spinner />
        ) : (
          <span className="show-more" onClick={handleShowMore}>
            Show more
          </span>
        )}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Articles;
