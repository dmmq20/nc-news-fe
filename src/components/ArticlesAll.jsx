import ArticleCard from "./ArticleCard";
import Spinner from "./Spinner";

const ArticlesAll = ({
  articles,
  handleShowMore,
  showMoreIsClicked,
  hideShowMore,
}) => {
  return (
    <>
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
          !hideShowMore && (
            <span className="show-more" onClick={handleShowMore}>
              Show more
            </span>
          )
        )}
      </div>
    </>
  );
};

export default ArticlesAll;
