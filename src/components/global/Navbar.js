import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="navbar-container">
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list__item">
          <Link className="navbar__list__item__link" to="/">
            HOME
          </Link>
        </li>
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
