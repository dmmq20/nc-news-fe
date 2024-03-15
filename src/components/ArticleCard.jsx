import { Link } from "react-router-dom";
import "/src/components/styles/ArticleCard.css";

const ArticleCard = ({ article }) => {
  return (
    <article className="article-card">
      <Link to={`/article/${article.article_id}`}>
        <div className="title-and-img">
          <div>
            <h3 className="article-title">{article.title}</h3>
            <p>{new Date(article.created_at).toDateString()}</p>
          </div>
          <img className="article-image" src={article.article_img_url} />
        </div>
        <div>
          <div className="article-card-details">
            <span>{article.author}</span>
            <span
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {article.votes} votes | {article.comment_count}{" "}
              <img src="/message-text.svg" style={{ marginLeft: "3px" }} />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;
