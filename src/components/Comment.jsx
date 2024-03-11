const Comment = ({ comment }) => {
  const time = new Date() - new Date(comment.created_at);
  // only handling days for now
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  return (
    <div className="comment">
      <div style={{ display: "flex" }}>
        <span style={{ fontWeight: "600" }}>{comment.author}</span>
        <ul style={{ margin: "0" }}>
          <li>{days} days ago</li>
        </ul>
      </div>
      <p>{comment.body}</p>
      <hr />
    </div>
  );
};

export default Comment;
