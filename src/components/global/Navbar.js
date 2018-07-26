import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/img/YC_logo_new.png";

const Navbar = () => (
  <div className="navbar-container">
    <Link to="/" className="navbar-logo" style={{ textDecoration: "none" }}>
      <img className="navbar-logo__img" src={logo} />{" "}
      <span className="navbar-logo__name">Yu Chiu</span>
    </Link>
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__list__item">
          <Link className="navbar__list__item__link" to="/showcase">
            <i
              className="fa fa-code fa-1x navbar__list__item__link__icon"
              aria-hidden="true"
            />{" "}
            <span className="navbar__list__item__link__name">SHOWCASE</span>
          </Link>
        </li>
        <li className="navbar__list__item">
          <Link className="navbar__list__item__link" to="/contact">
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

export default Navbar;
