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
          <ul>
            <li style={{ textDecoration: "none" }}>Author: {article.author}</li>
            <li style={{ textDecoration: "none" }}>Topic: {article.topic}</li>
            <li style={{ textDecoration: "none" }}>Votes: {article.votes}</li>
          </ul>
        </div>
      </Link>
    </article>
  );
};

export default ArticleCard;
