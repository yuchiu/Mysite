import React from "react";

class Contacts extends React.Component {
  render() {
    return (
      <div id="contact-container">
        <div id="social-contact">
          <h1 id="contact-title">Get In Touch With Me</h1>
          <div className="buttonbox">
            <div className="buttonborder">
              <a
                href="https://github.com/yuchiu"
                className="a-tag-btn victoria-one"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-github" />
                <br />
                <p>GitHub</p>
              </a>
            </div>
          </div>
          <div className="buttonbox">
            <div className="buttonborder">
              <a
                href="mailto:steven2002yc@gmail.com"
                className="a-tag-btn victoria-two"
              >
                <i className="fa fa-envelope" />
                <br />
                <p>steven2002yc@gmail.com</p>
              </a>
            </div>
          </div>
          <div className="buttonbox">
            <div className="buttonborder">
              <a
                href="https://www.freecodecamp.org/yuchiu"
                className="a-tag-btn victoria-three"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-free-code-camp" />
                <br />
                <p>FreeCodeCamp</p>
              </a>
            </div>
          </div>
          <div className="buttonbox">
            <div className="buttonborder">
              <a
                href="https://codepen.io/yuchiu/"
                className="a-tag-btn victoria-four"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fa fa-codepen" />
                <br />
                <p>CodePen</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contacts;
