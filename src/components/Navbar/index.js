import React from "react";
import $ from "jquery";

import "./index.scss";

class Navbar extends React.Component {
  componentDidMount() {
    $(window).scroll(() => {
      if ($(document).scrollTop() > 50) {
        $(".navbar-wrapper").addClass("navbar-wrapper--shrink");
      } else {
        $(".navbar-wrapper").removeClass("navbar-wrapper--shrink");
      }
    });
  }

  render() {
    return (
      <section className="navbar-wrapper">
        <nav className="navbar-wrapper__nav">
          <ul className="navbar-wrapper__nav__ul">
            <li className="navbar-wrapper__nav__ul__li">
              <a
                className="navbar-wrapper__nav__ul__li__link"
                href="#landing-wrapper"
              >
                Home
              </a>
            </li>
          </ul>
          <ul className="navbar-wrapper__nav__ul">
            <li className="navbar-wrapper__nav__ul__li">
              <a
                className="navbar-wrapper__nav__ul__li__link"
                href="#showcases-wrapper"
              >
                Showcases
              </a>
            </li>
            <li className="navbar-wrapper__nav__ul__li">
              <a
                className="navbar-wrapper__nav__ul__li__link"
                href="#projects-wrapper"
              >
                Projects
              </a>
            </li>
            <li className="navbar-wrapper__nav__ul__li">
              <a
                className="navbar-wrapper__nav__ul__li__link"
                href="#contacts-wrapper"
              >
                Contacts
              </a>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}

export default Navbar;
