import { useState } from "react";

const Filter = ({ searchParams, setSearchParams }) => {
  const [sortBy, setSortBy] = useState(
    searchParams.get("sort_by") || "created_at"
  );
  const [orderBy, setOrderBy] = useState(searchParams.get("order") || "desc");

  const handleSortByChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleOrderByChange = (e) => {
    setOrderBy(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ sort_by: sortBy, order: orderBy });
  };

  return (
    <form
      className="filter-form"
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        flexWrap: "wrap",
      }}
    >
      <label htmlFor="sort_by">Sort by:</label>
      <select id="sort_by" value={sortBy} onChange={handleSortByChange}>
        <option value="created_at">Date</option>
        <option value="comment_count">Comment Count</option>
        <option value="votes">Vote Count</option>
        <option value="author">Author</option>
      </select>
      <label htmlFor="order_by">Order by:</label>
      <select id="order_by" value={orderBy} onChange={handleOrderByChange}>
        <option value="desc">Descending</option>
        <option value="asc">Ascending</option>
      </select>
      <button type="submit">Apply</button>
    </form>
  );
};

export default Filter;
