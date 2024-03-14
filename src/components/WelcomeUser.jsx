import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const WelcomeUser = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <div style={{ padding: "5px" }}>
      <img
        src={currentUser.avatar_url}
        style={{ width: "30px", height: "30px", marginRight: "5px" }}
      />
      {currentUser.username}
      <hr />
    </div>
  );
};

export default WelcomeUser;
