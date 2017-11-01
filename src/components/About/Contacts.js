import React from 'react'

class Contacts extends React.Component {
  render() {
    return (
      <div className="contact-container" id="contact-container">
        <h1>about me</h1>
        <p>This book is a treatise on the theory of ethics, very popular during the
          Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
          comes from a line in section 1.10.32.
        </p>
        <p>
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for
          those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
          Malorum" by Cicero are also reproduced in their exact original form, accompanied
          by English versions from the 1914 translation by H. Rackham.</p>
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