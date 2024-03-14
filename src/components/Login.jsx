import "/src/components/styles/Login.css";
import { useContext, useEffect, useState } from "react";
import { getAllUsers } from "../api";
import { UserContext } from "../contexts/userContext";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getAllUsers().then((users) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, []);

  const handleLogin = (user) => {
    login(user);
    navigate("/");
  };

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
            onClick={() => handleLogin(user)}
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
