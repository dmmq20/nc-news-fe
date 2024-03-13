import { useState } from "react";
import "/src/components/styles/Navbar.css";
import { Link } from "react-router-dom";
import Topics from "./Topics";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className={`navbar-menu ${isMenuOpen ? "active" : ""}`}>
        <ul className="navbar-menu-items">
          <li className="item">Topics</li>
          <Topics toggleMenu={toggleMenu} />
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <Link to="/" className="title">
        <div className="big-title">NC</div>
        <div className="little-title">News</div>
      </Link>
    </nav>
  );
};

export default Navbar;
