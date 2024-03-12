import { useState } from "react";
import "./AddComment.css";
import { addArticleComment } from "../api";

const AddComment = ({ article_id, currentUser, comments, setComments }) => {
  const [commentContent, setCommentContent] = useState("");
  const [notification, setNotification] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const comment_id = Math.max(...comments.map((c) => c.comment_id)) + 1;
    const newComment = {
      comment_id,
      article_id,
      author: currentUser,
      body: commentContent,
      created_at: new Date(),
      votes: 0,
    };

    setComments((current) => [newComment, ...current]);

    addArticleComment(article_id, {
      username: currentUser,
      body: commentContent,
    })
      .then((_) => {
        setNotification("Thanks for your comment!");
        setTimeout(() => setNotification(null), 2000);
      })
      .catch((_) => {
        setComments([...comments]);
        setNotification("Something went wrong...");
        setTimeout(() => setNotification(null), 5000);
      });

    setCommentContent("");
  };

  return notification ? (
    <p className="notification">{notification}</p>
  ) : (
    <div className="comment-form">
      <form onSubmit={handleSubmit}>
        <textarea
          type="text"
          placeholder="add new comment"
          rows="5"
          cols="40"
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          required
        />
        <button type="submit">Add comment</button>
      </form>
    </div>
  );
};

export default AddComment;
