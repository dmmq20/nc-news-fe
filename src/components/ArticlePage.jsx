import { Link, useNavigate, useParams } from "react-router-dom";
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
  const [hasVoted, setHasVoted] = useState(0);
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
    setHasVoted((prevVote) => {
      const newVote = prevVote + num;
      setNotification(newVote !== 0 ? "Thanks for voting!" : null);
      return newVote;
    });
    updateArticleVotes(article_id, { inc_votes: num }).catch((_) => {
      setArticle({ ...article });
      setNotification("Something went wrong...");
    });
  };

  return isLoaded ? (
    <>
      <Navbar />
      <article className="article-page">
        <img src={article.article_img_url} alt={article.title} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0",
          }}
        >
          <h1 style={{ padding: "0", margin: "0" }}>
            {article.title}{" "}
            <Link to={`/articles/${article.topic}`} className="topic">
              [{article.topic}]
            </Link>
          </h1>
          <div className="like-icons">
            <img
              onClick={() =>
                hasVoted === 1
                  ? setNotification("You have already voted")
                  : handleVote(1)
              }
              src="/chevron-up.svg"
            />
            <img
              onClick={() =>
                hasVoted === -1
                  ? setNotification("You have already voted")
                  : handleVote(-1)
              }
              src="/chevron-down.svg"
            />
          </div>
        </div>
        <div className="author-info">{article.author}</div>
        <div className="date-and-topic">
          <p className="date">{new Date(article.created_at).toDateString()}</p>
        </div>
        <p className="article-content">{article.body}</p>
        <div className="likes">
          <p>Likes: {article.votes}</p>
          <p className="likes">{notification}</p>
        </div>
        <Comments article_id={article_id} />
      </article>
    </>
  ) : (
    <Loading />
  );
};

export default ArticlePage;
