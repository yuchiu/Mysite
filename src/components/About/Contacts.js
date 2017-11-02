import React from 'react'

class Contacts extends React.Component {
  render() {
    return (
      <div className="contact-container" id="contact-container">
        <div id="about-me-container">
        <h1 id="about-me-title">about me</h1>
        <p>I'm a Web Developer based in New York City. Looking for amazing projects? Send me a message!
        </p>
        <p>
          This site and the projects were designed and built by hand from ground up. Check out the code on my Github.</p>
          </div>
        <div className="content2">
          <h1 id="contact-title">Get in touch with me</h1>
          <div className="buttonbox">
            <div className="buttonborder">
              <a href="https://github.com/yuchiu" target="_blank">
                <i className="fa fa-github"></i><br/>
                GitHub</a>
            </div>
          </div>
          <div className="buttonbox" id="mail">
            <div className="buttonborder">
              <a href="mailto:steven2002yc@gmail.com">
                <i className="fa fa-envelope"></i><br/>
                <p>steven2002yc@gmail</p></a>
            </div>
          </div>
          <div className="buttonbox" id="freecodecamp">
            <div className="buttonborder">
              <a href="https://www.freecodecamp.org/yuchiu" target="_blank">
                <i className="fa fa-free-code-camp"></i><br/>
                <p>FreeCodeCamp</p></a>
            </div>
          </div>
          <div className="buttonbox">
            <div className="buttonborder">
              <a href="https://codepen.io/yuchiu/" target="_blank">
                <i className="fa fa-codepen"></i><br/>
                CodePen</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contacts