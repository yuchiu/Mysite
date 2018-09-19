import React from "react";
import { Link } from "react-router-dom";

import "./TransparentNavbar.scss";

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
        alt="img"
      />{" "}
      <span className="navbar-logo__name navbar-logo__name--transparent">
        Yu Chiu
      </span>
    </Link>
    <nav className="transparent-navbar">
      <ul className="transparent-navbar__list">
        <li className="transparent-navbar__list__item">
          <Link className="transparent-navbar__list__item__link" to="/showcase">
            <i
              className="fa fa-code fa-1x navbar__list__item__link__icon"
              aria-hidden="true"
            />{" "}
            <span className="navbar__list__item__link__name">SHOWCASE</span>
          </Link>
        </li>
        <li className="transparent-navbar__list__item">
          <Link className="transparent-navbar__list__item__link" to="/contact">
            <i
              className="fa fa-user fa-1x navbar__list__item__link__icon"
              aria-hidden="true"
            />{" "}
            <span className="navbar__list__item__link__name">CONTACT</span>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default TransparentNavbar;
