import React from 'react'

class Contacts extends React.Component {
  render() {
    return (
      <div id="contact-container">
        
        <div id="social-contact">
          <h1 id="contact-title">Get In Touch With Me</h1>
          <div className="buttonbox">
            <div className="buttonborder">
              <a href="https://github.com/yuchiu" className="a-tag-btn victoria-one" target="_blank">
                <i className="fa fa-github"></i><br/>
                <p>GitHub</p></a>
            </div>
          </div>
          <div className="buttonbox" id="mail">
            <div className="buttonborder">
              <a href="mailto:steven2002yc@gmail.com" className="a-tag-btn victoria-two">
                <i className="fa fa-envelope"></i><br/>
                <p>steven2002yc@gmail.com</p></a>
            </div>
          </div>
          <div className="buttonbox" id="freecodecamp">
            <div className="buttonborder">
              <a href="https://www.freecodecamp.org/yuchiu" className="a-tag-btn victoria-three" target="_blank">
                <i className="fa fa-free-code-camp"></i><br/>
                <p>FreeCodeCamp</p></a>
            </div>
          </div>
          <div className="buttonbox">
            <div className="buttonborder">
              <a href="https://codepen.io/yuchiu/" className="a-tag-btn victoria-four" target="_blank">
                <i className="fa fa-codepen"></i><br/>
                <p>CodePen</p></a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Contacts