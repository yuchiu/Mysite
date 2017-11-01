import React from 'react'

class Contacts extends React.Component {
  render() {
    return (
      <div className="contact-container" id="contact-container">
        <h1>Contacts</h1>
        <a href="https://github.com/yuchiu" className="contact-item" target="_blank">
          <i className="fa fa-github fa-2x" aria-hidden="true"></i>
        </a>
        <a
          href="https://www.freecodecamp.org/yuchiu"
          target="_blank"
          className="contact-item">
          <i className="fa fa-free-code-camp fa-2x" aria-hidden="true"></i>
        </a>
        <a href="https://codepen.io/yuchiu/" target="_blank" className="contact-item">
          <i className="fa fa-codepen fa-2x" aria-hidden="true"></i>
        </a>
        <a
          href="mailto:steven2002yc@gmail.com"
          target="_blank"
          className="contact-item">
          <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
        </a>
      </div>
    )
  }
}

export default Contacts