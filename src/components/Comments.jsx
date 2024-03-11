import { useEffect, useState } from "react";
import Comment from "./Comment";
import { getArticleComments } from "../api";

const Comments = ({ article_id }) => {
  const [comments, setComments] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

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
      {comments ? (
        comments.map((comment) => (
          <Comment key={comment.comment_id} comment={comment} />
        ))
      ) : (
        <p>No comments</p>
      )}
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default Comments;
