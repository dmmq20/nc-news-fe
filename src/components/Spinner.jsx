import "/src/components/styles/Spinner.css";
const Spinner = () => {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default Spinner;
