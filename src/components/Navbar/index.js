import React from "react";
import $ from "jquery";

import YCLogo from "./YCLogo";
import "./index.scss";

class Navbar extends React.Component {
  componentDidMount() {
    const navWrapper = $(".navbar-wrapper");

    const landingTop = $("#landing-wrapper").offset().top;
    const showcasesTop = $("#showcases-wrapper").offset().top;
    const projectsTop = $("#projects-wrapper").offset().top;
    const contactsTop = $("#contacts-wrapper").offset().top;

    const landingLink = $("#landing-nav-link");
    const showcasesLink = $("#showcases-nav-link");
    const projectsLink = $("#projects-nav-link");
    const contactsLink = $("#contacts-nav-link");

    landingLink.addClass("navbar-wrapper__nav__ul__li__link--active");

    $(window).scroll(() => {
      if ($(document).scrollTop() > 50) {
        navWrapper.addClass("navbar-wrapper--shrink");
      } else {
        navWrapper.removeClass("navbar-wrapper--shrink");
      }
      if (
        $(window).scrollTop() >= landingTop &&
        $(window).scrollTop() < showcasesTop
      ) {
        landingLink.addClass("navbar-wrapper__nav__ul__li__link--active");
        showcasesLink.removeClass("navbar-wrapper__nav__ul__li__link--active");
        contactsLink.removeClass("navbar-wrapper__nav__ul__li__link--active");
        projectsLink.removeClass("navbar-wrapper__nav__ul__li__link--active");
      } else {
        landingLink.removeClass("navbar-wrapper__nav__ul__li__link--active");
      }

      if (
        $(window).scrollTop() >= showcasesTop &&
        $(window).scrollTop() < projectsTop
      ) {
        showcasesLink.addClass("navbar-wrapper__nav__ul__li__link--active");
        landingLink.removeClass("navbar-wrapper__nav__ul__li__link--active");
        contactsLink.removeClass("navbar-wrapper__nav__ul__li__link--active");
        projectsLink.removeClass("navbar-wrapper__nav__ul__li__link--active");
      } else {
        showcasesLink.removeClass("navbar-wrapper__nav__ul__li__link--active");
      }
      if (
        $(window).scrollTop() >= projectsTop &&
        $(window).scrollTop() < contactsTop
      ) {
        projectsLink.addClass("navbar-wrapper__nav__ul__li__link--active");
        landingLink.removeClass("navbar-wrapper__nav__ul__li__link--active");
        showcasesLink.removeClass("navbar-wrapper__nav__ul__li__link--active");
        contactsLink.removeClass("navbar-wrapper__nav__ul__li__link--active");
      } else {
        projectsLink.removeClass("navbar-wrapper__nav__ul__li__link--active");
      }

      if ($(window).scrollTop() >= contactsTop) {
        contactsLink.addClass("navbar-wrapper__nav__ul__li__link--active");
        landingLink.removeClass("navbar-wrapper__nav__ul__li__link--active");
        projectsLink.removeClass("navbar-wrapper__nav__ul__li__link--active");
        showcasesLink.removeClass("navbar-wrapper__nav__ul__li__link--active");
      } else {
        contactsLink.removeClass("navbar-wrapper__nav__ul__li__link--active");
      }
    });
  }

  handleScroll = () => {};

  render() {
    return (
      <section className="navbar-wrapper">
        <nav className="navbar-wrapper__nav">
          <ul className="navbar-wrapper__nav__ul">
            <li className="navbar-wrapper__nav__ul__li">
              <a
                id="landing-nav-link"
                className="navbar-wrapper__nav__ul__li__link navbar-wrapper__nav__ul__li__link--logo "
                href="#landing-wrapper"
              >
                <YCLogo />
                Home
              </a>
            </li>
          </ul>
          <ul className="navbar-wrapper__nav__ul">
            <li className="navbar-wrapper__nav__ul__li">
              <a
                id="showcases-nav-link"
                className="navbar-wrapper__nav__ul__li__link "
                href="#showcases-wrapper"
              >
                Showcases
              </a>
            </li>
            <li className="navbar-wrapper__nav__ul__li">
              <a
                id="projects-nav-link"
                className="navbar-wrapper__nav__ul__li__link"
                href="#projects-wrapper"
              >
                Projects
              </a>
            </li>
            <li className="navbar-wrapper__nav__ul__li">
              <a
                id="contacts-nav-link"
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
