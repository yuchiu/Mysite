import React from "react";
import { Link } from "react-router-dom";

const TransparentNavbar = () => (
  <div className="transparent-navbar-container">
    <nav className="transparent-navbar">
      <ul className="transparent-navbar__list">
        <li className="transparent-navbar__list__item">
          <Link className="transparent-navbar__list__item__link" to="/">
            HOME
          </Link>
        </li>
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
