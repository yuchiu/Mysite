import React from 'react'

class EmailForm extends React.Component {
  render() {
    return (
      <div className="email-form-container" id="email-form">
      <h1>HEY!</h1>
        <form method="POST" action="https://script.google.com/macros/s/AKfycbwmf_2NITKOXqDaHRe_NEkSka34j9KNQ-gpEFsHXPoUF6Hmu1s/exec" target="_blank">
          <input type="email" name="email" placeholder="Your email" required/>
          <br/><input type="text" name="name" placeholder="Your name" required/>
          <br/>
          <textarea name="message" rows="6" placeholder="Your message" required></textarea>
          <br/>
          <button className="email-form-item" type="submit">send</button>
        </form>
      </div>
    )
  }
}
// method="POST" action="https://script.google.com/macros/s/AKfycbwmf_2NITKOXqDaHRe_NEkSka34j9KNQ-gpEFsHXPoUF6Hmu1s/exec"
export default EmailForm