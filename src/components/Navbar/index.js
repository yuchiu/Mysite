import React from "react";
import $ from "jquery";

import "./index.scss";

class Navbar extends React.Component {
  componentDidMount() {
    $(window).scroll(() => {
      if ($(document).scrollTop() > 50) {
        $(".top-bar").addClass("top-bar--shrink");
      } else {
        $(".top-bar").removeClass("top-bar--shrink");
      }
    });
  }

  render() {
    return (
      <nav className="top-bar">
        <ul className="top-bar__nav">
          <li className="top-bar__nav__item">
            <a className="top-bar__nav__item__link" href="#landing">
              Home
            </a>
          </li>
          <li className="top-bar__nav__item">
            <a className="top-bar__nav__item__link" href="#skillset">
              Skills
            </a>
          </li>
          <li className="top-bar__nav__item">
            <a className="top-bar__nav__item__link" href="#projects">
              Projects
            </a>
          </li>
          <li className="top-bar__nav__item">
            <a className="top-bar__nav__item__link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
