import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <div id="home">
          <div className="content animated bounceInDown">
            {/* eslint-disable-next-line */}
            <h1>HI THERE, I'M YU.</h1>
            <h2 id="introduction">
              Learner · Creator · Developer<span id="line">|</span>
            </h2>
            <div className="contact-icons">
              <a
                href="https://github.com/yuchiu"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github fa-2x" aria-hidden="true" />
              </a>
              <a
                href="https://www.freecodecamp.org/yuchiu"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-free-code-camp fa-2x" aria-hidden="true" />
              </a>
              <a
                href="https://codepen.io/yuchiu/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-codepen fa-2x" aria-hidden="true" />
              </a>
              <a
                href="mailto:steven2002yc@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-envelope fa-2x" aria-hidden="true" />
              </a>
            </div>
            <div className="arrow">
              <a
                href="#showcase-container"
                className="fa fa-angle-double-down fa-3x"
                id="arrow-icon"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
