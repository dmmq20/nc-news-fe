import { useParams } from "react-router-dom";
import { getArticle } from "../api";
import { useEffect, useState } from "react";
import "./ArticlePage.css";

const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    getArticle(article_id).then((article) => {
      setArticle(article);
      setIsLoaded(true);
    });
  }, []);

  return isLoaded ? (
    <article className="article-page">
      <img src={article.article_img_url} alt={article.title} />
      <h1>{article.title}</h1>
      <div className="author-info">{article.author}</div>
      <p className="date">{new Date(article.created_at).toDateString()}</p>
      <p className="article-content">{article.body}</p>
      <p className="likes">Likes: {article.votes}</p>
    </article>
  ) : (
    <p>Loading...</p>
  );
};

export default ArticlePage;
