import "/src/components/styles/Login.css";
import { useContext, useEffect, useState } from "react";
import { getAllUsers } from "../api";
import { UserContext } from "../contexts/userContext";
import Loading from "./Loading";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setCurrentUser } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    getAllUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div className="login-container">
      <h1>Choose a user</h1>
      <div className="user-list">
        {users.map((user) => (
          <div
            className={`user-card`}
            key={user.username}
            onClick={() => setCurrentUser(user)}
          >
            <img src={user.avatar_url} alt={user.username} />
            <p>{user.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Login;
