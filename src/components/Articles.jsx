import "/src/components/styles/Articles.css";
import { useEffect, useState } from "react";
import { getAllArticles } from "../api";
import ArticleCard from "./ArticleCard";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Filter from "./Filter";
import Loading from "./Loading";
import Spinner from "./Spinner";
import Navbar from "./Navbar";
import Socials from "./Socials";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showMore, setShowMore] = useState(1);
  const [showMoreIsClicked, setShowMoreIsClicked] = useState(false);
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(false || showMoreIsClicked);
    getAllArticles(topic, showMore, searchParams)
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoaded(true);
        setShowMoreIsClicked(false);
      })
      .catch((_) => navigate("/404"));
  }, [topic, showMore, searchParams]);

  const handleShowMore = () => {
    setShowMoreIsClicked(true);
    setShowMore(showMore + 1);
  };

  return isLoaded ? (
    <div>
      <Navbar />
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
      <Socials />
    </div>
  ) : (
    <Loading />
  );
};

export default Articles;
