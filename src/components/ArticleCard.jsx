const ArticleCard = ({ article }) => {
  return (
    <article className="article-card">
      <h3 className="article-title">{article.title}</h3>
      <img className="article-image" src={article.article_img_url} />
    </article>
  );
};

export default ArticleCard;
