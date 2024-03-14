import Logo from "./Logo";
import Spinner from "./Spinner";

const Loading = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 1)",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          backgroundColor: "white",
          padding: "20px",
        }}
      >
        <Logo />
        <Spinner />
        <div className="loading-text">Loading...</div>
      </div>
    </div>
  );
};

export default Loading;
