import { useEffect, useState } from "react";
import Comment from "./Comment";
import { getArticleComments } from "../api";
import Spinner from "./Spinner";
import AddComment from "./AddComment";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    setIsLoaded(false);
    getArticleComments(article_id).then((comments) => {
      setComments(comments);
      setIsLoaded(true);
    });
  }, []);

  return isLoaded ? (
    <div className="article-comments">
      <h3>Comments</h3>
      <AddComment
        article_id={article_id}
        currentUser={currentUser}
        comments={comments}
        setComments={setComments}
      />
      {comments.length > 0 ? (
        comments.map((comment) => (
          <Comment
            key={comment.comment_id}
            comment={comment}
            currentUser={currentUser}
          />
        ))
      ) : (
        <p>No comments</p>
      )}
    </div>
  ) : (
    <Spinner />
  );
};

export default Comments;
