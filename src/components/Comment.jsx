import { useState } from "react";
import "/src/components/styles/Comment.css";
import { deleteArticleComment } from "../api";

const Comment = ({ comment, currentUser }) => {
  const [notification, setNotification] = useState(null);

  const time = new Date() - new Date(comment.created_at);
  let days = Math.floor(time / (1000 * 60 * 60 * 24));
  days = Math.max(days, 0);
  const userIsAuthor = comment.author === currentUser;

  const handleDelete = (_) => {
    setNotification("Comment removed");
    deleteArticleComment(comment.comment_id).catch((_) => {
      setNotification("Something went wrong...");
    });
  };

  return (
    <div className="comment">
      {notification ? (
        <p>{notification}</p>
      ) : (
        <>
          <div style={{ display: "flex" }}>
            <span style={{ fontWeight: "600" }}>{comment.author}</span>
            <ul style={{ margin: "0" }}>
              <li>{days} days ago</li>
            </ul>
          </div>
          <p>{comment.body}</p>
          {userIsAuthor && (
            <span className="delete" onClick={handleDelete}>
              Delete
            </span>
          )}
        </>
      )}
      <hr />
    </div>
  );
};

export default Comment;
