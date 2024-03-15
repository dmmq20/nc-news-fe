import Topics from "./Topics";

const NoResults = () => {
  return (
    <div style={{ margin: "50% 0", width: "300px" }}>
      <h1>No results</h1>
      <p>Sorry, we couldn't find any articles matching your search criteria.</p>
      <p>Why not check out one of the following:</p>
      <Topics />
    </div>
  );
};

export default NoResults;
