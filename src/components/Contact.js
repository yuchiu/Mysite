import React from 'react'

class Projects extends React.Component {
  render() {
    return (
      <div>
        <div className="contact" id="contact">
          <div className="content2">

            <h1 id="getintouch">Get in touch with me</h1>
            <h2 id="getintouch2"></h2>

            <div className="buttonbox">
              <div className="buttonborder">
                <a href="https://github.com/yuchiu" target="_blank">
                  <i className="fa fa-github"></i>
                  GitHub</a>
              </div>
            </div>
            <div className="buttonbox" id="mail">
              <div className="buttonborder">
                <a href="mailto:steven2002yc@gmail.com">
                  <i className="fa fa-envelope"></i>
                  steven2002yc@gmail.com</a>
              </div>
            </div>
            <div className="buttonbox">
              <div className="buttonborder">
                <a href="https://www.freecodecamp.org/yuchiu" target="_blank">
                  <i className="fa fa-free-code-camp"></i>
                  FreeCodeCamp</a>
              </div>
            </div>
            <div className="buttonbox">
              <div className="buttonborder">
                <a href="https://codepen.io/yuchiu/" target="_blank">
                  <i className="fa fa-codepen"></i>
                  CodePen</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects