import React from 'react'

class About extends React.Component {
  render() {
    return (
      <div className="contact" id="contact">
        <div className="about-me-container" id="about-me">
          <h1>About Me</h1>
          <p>fajiosafio djasd ijdias is ajd pasdfdj. asdjasjdg jiasd na a
            aidfjfn.dijsaiodjdij anbd jijf how about yhou ?</p>
        </div>
        <div className="email-form-container" id="email-form">
          <form method="POST" action="https://script.google.com/macros/">
            <input type="email" name="email" placeholder="Your email" required/>
            <input type="text" name="name" placeholder="Your name" required/>
            <textarea name="message" rows="6" required placeholder="Your message" required></textarea>
            <button type="submit">send</button>
          </form>
        </div>
        <div className="social-media-container" id="social-media">
          <a href="https://github.com/yuchiu" className="social-media-item"  target="_blank">
            <i className="fa fa-github fa-2x" aria-hidden="true"></i>
          </a>
          <a href="https://www.freecodecamp.org/yuchiu" target="_blank" className="social-media-item" >
            <i className="fa fa-free-code-camp fa-2x" aria-hidden="true"></i>
          </a>
          <a href="https://codepen.io/yuchiu/" target="_blank" className="social-media-item" >
            <i className="fa fa-codepen fa-2x" aria-hidden="true"></i>
          </a>
          <a href="mailto:steven2002yc@gmail.com" target="_blank" className="social-media-item" >
            <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
          </a>
        </div>

      </div>
    )
  }
}

export default About