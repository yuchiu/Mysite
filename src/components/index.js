import React from "react";
import $ from "jquery";

import Landing from "./Landing";
import Projects from "./Projects";
import SkillSet from "./SkillSet";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
      <div className="page-container">
        <Navbar />
        <Landing />
        <SkillSet />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Layout;
