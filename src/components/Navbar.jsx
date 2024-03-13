import { useContext, useState } from "react";
import "/src/components/styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import Topics from "./Topics";
import { UserContext } from "../contexts/userContext";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <ul className="navbar-menu-items">
          <li className="item">Topics</li>
          <Topics toggleMenu={toggleMenu} />
          <p className="item logout" onClick={handleLogout}>
            Logout
          </p>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <Link to="/" className="title">
        <Logo />
      </Link>
    </nav>
  );
};

export default Navbar;
