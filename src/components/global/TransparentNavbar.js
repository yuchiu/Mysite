import React from "react";
import { Link } from "react-router-dom";

const TransparentNavbar = () => (
  <div className="transparent-navbar-container">
    <Link
      to="/"
      className="navbar-logo navbar-logo--transparent"
      style={{ textDecoration: "none" }}
    >
      <img
        className="navbar-logo__img navbar-logo__img--transparent"
        src="https://i.imgur.com/fB7aaGJ.png"
      />{" "}
      <span className="navbar-logo__name navbar-logo__name--transparent">
        Yu Chiu
      </span>
    </Link>
    <nav className="transparent-navbar">
      <ul className="transparent-navbar__list">
        <li className="transparent-navbar__list__item">
          <Link className="transparent-navbar__list__item__link" to="/showcase">
            SHOWCASE
          </Link>
        </li>
        <li className="transparent-navbar__list__item">
          <Link className="transparent-navbar__list__item__link" to="/contact">
            CONTACT
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default TransparentNavbar;
