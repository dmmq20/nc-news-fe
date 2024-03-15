import "/src/components/styles/Articles.css";
import { useEffect, useState } from "react";
import { getAllArticles } from "../api";
import { useParams, useSearchParams } from "react-router-dom";
import Filter from "./Filter";
import Loading from "./Loading";
import Navbar from "./Navbar";
import Socials from "./Socials";
import NoResults from "./NoResults";
import ArticlesAll from "./ArticlesAll";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [showMore, setShowMore] = useState(1);
  const [hideShowMore, setHideShowMore] = useState(false);
  const [badQuery, setBadQuery] = useState(false);
  const [showMoreIsClicked, setShowMoreIsClicked] = useState(false);
  const { topic } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setIsLoaded(false || showMoreIsClicked);
    getAllArticles(topic, showMore, searchParams)
      .then(({ articles, total_count }) => {
        setHideShowMore(articles.length === total_count);
        setArticles(articles);
        setIsLoaded(true);
        setBadQuery(false);
        setShowMoreIsClicked(false);
      })
      .catch((_) => {
        setIsLoaded(true);
        setBadQuery(true);
      });
  }, [topic, showMore, searchParams]);

  const handleShowMore = () => {
    setShowMoreIsClicked(true);
    setShowMore(showMore + 1);
  };

  return isLoaded ? (
    <div>
      <Navbar />
      <Filter searchParams={searchParams} setSearchParams={setSearchParams} />
      {!badQuery ? (
        <ArticlesAll
          articles={articles}
          handleShowMore={handleShowMore}
          showMoreIsClicked={showMoreIsClicked}
          hideShowMore={hideShowMore}
        />
      ) : (
        <NoResults />
      )}
      <Socials />
    </div>
  ) : (
    <Loading />
  );
};

export default Articles;
