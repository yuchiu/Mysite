import React from "react";
import "../../assets/scss/styles.scss";

import $ from "jquery";
import Nav from "./nav";
import Home from "./home";
import Showcase from "./showcase";
import About from "./about";
import Footer from "./footer";

class Layout extends React.Component {
  componentDidMount() {
    // eslint-disable-next-line
    $("a").click(function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        const { hash } = this;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top
          },
          1000,
          () => {
            window.location.hash = hash;
          }
        );
      }
    });
  }

  render() {
    return (
      <div>
        <Nav />
        <Home />
        <Showcase />
        <About />
        <Footer />
      </div>
    );
  }
}

export default Layout;
