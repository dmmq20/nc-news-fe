import "./ArticleCard.css";

const ArticleCard = ({ article }) => {
  return (
    <article className="article-card">
      <div className="title-and-img">
        <div>
          <h3 className="article-title">{article.title}</h3>
          <p>{new Date(article.created_at).toDateString()}</p>
        </div>
        <img className="article-image" src={article.article_img_url} />
      </div>
      <div>
        <ul>
          <li>Author: {article.author}</li>
          <li>Topic: {article.topic}</li>
          <li>Votes: {article.votes}</li>
        </ul>
      </div>
    </article>
  );
};

export default ArticleCard;
