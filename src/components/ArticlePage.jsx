import { useNavigate, useParams } from "react-router-dom";
import { getArticle, updateArticleVotes } from "../api";
import { useEffect, useState } from "react";
import "/src/components/styles/ArticlePage.css";
import Comments from "./Comments";
import Loading from "./Loading";
import Navbar from "./Navbar";

const ArticlePage = () => {
  const { article_id } = useParams();
  const [article, setArticle] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoaded(false);
    getArticle(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoaded(true);
      })
      .catch((_) => navigate("/404"));
  }, []);

  const handleVote = (num) => {
    const updatedArticle = { ...article, votes: article.votes + num };
    setArticle(updatedArticle);
    updateArticleVotes(article_id, { inc_votes: num })
      .then((_) => {
        setNotification("Thanks for voting!");
        setTimeout(() => setNotification(null), 2500);
      })
      .catch((_) => {
        setArticle({ ...article });
        setNotification("Something went wrong...");
        setTimeout(() => setNotification(null), 2500);
      });
  };

  return isLoaded ? (
    <>
      <Navbar />
      <article className="article-page">
        <img src={article.article_img_url} alt={article.title} />
        <h1>{article.title}</h1>
        <div className="author-info">{article.author}</div>
        <p className="date">{new Date(article.created_at).toDateString()}</p>
        <p className="article-content">{article.body}</p>
        <div className="likes">
          <p>Likes: {article.votes}</p>
          <p>{notification}</p>
          <div className="like-icons">
            {/* TODO: give credit: https://icons8.com/license */}
            <img onClick={() => handleVote(1)} src="/thumbs-up.png" />
            <img onClick={() => handleVote(-1)} src="/thumbs-down.png" />
          </div>
        </div>
        <Comments article_id={article_id} />
      </article>
    </>
  ) : (
    <Loading />
  );
};

export default ArticlePage;
