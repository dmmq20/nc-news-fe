import { useEffect, useState } from "react";
import { getArticleComments } from "../api";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import Comment from "./Comment";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Spinner from "./Spinner";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { currentUser } = useContext(UserContext);
  const [showMore, setShowMore] = useState(1);
  const [hideShowMore, setHideShowMore] = useState(false);
  const [showMoreIsClicked, setShowMoreIsClicked] = useState(false);

  useEffect(() => {
    setIsLoaded(false || showMoreIsClicked);
    getArticleComments(article_id, showMore).then((comments) => {
      setComments((prevComments) => {
        setHideShowMore(prevComments.length === comments.length);
        return comments;
      });
      setIsLoaded(true);
      setShowMoreIsClicked(false);
    });
  }, [showMore]);

  const handleShowMore = () => {
    setShowMoreIsClicked(true);
    setShowMore(showMore + 1);
  };

  return isLoaded ? (
    <div className="article-comments">
      <h3>Comments</h3>
      <AddComment
        article_id={article_id}
        currentUser={currentUser.username}
        comments={comments}
        setComments={setComments}
      />
      {comments.length > 0 ? (
        comments.map((comment) => (
          <Comment
            key={comment.comment_id}
            comment={comment}
            currentUser={currentUser.username}
          />
        ))
      ) : (
        <p>No comments</p>
      )}
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
    </div>
  ) : (
    <Loading />
  );
};

export default Comments;
