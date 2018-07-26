import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="navbar-container">
    <Link to="/" className="navbar-logo" style={{ textDecoration: "none" }}>
      <img className="navbar-logo__img" src="https://i.imgur.com/fB7aaGJ.png" />{" "}
      <span className="navbar-logo__name">Yu Chiu</span>
    </Link>
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list__item">
          <Link className="navbar__list__item__link" to="/showcase">
            SHOWCASE
          </Link>
        </li>
        <li className="navbar__list__item">
          <Link className="navbar__list__item__link" to="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Navbar;
