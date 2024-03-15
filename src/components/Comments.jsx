import { useEffect, useState } from "react";
import { getArticleComments } from "../api";
import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import Comment from "./Comment";
import AddComment from "./AddComment";
import Loading from "./Loading";

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
    </div>
  ) : (
    <Loading />
  );
};

export default Comments;
