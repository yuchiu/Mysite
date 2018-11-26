import React from "react";
import validator from "validator";
import CopyToClipboard from "react-copy-to-clipboard";

import "./ContactsForm.scss";
import { PopUpModal } from "../common";

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMsgSend: false,
      isEmailCopied: "copy email",
      myEmail: "steven2002yc@gmail.com",
      formData: {
        subject: "",
        message: "",
        email: ""
      }
    };
  }

  handleCopy = () => {
    this.setState({ isEmailCopied: "copied!" });
    setTimeout(() => {
      this.setState({ isEmailCopied: "copy email" });
    }, 3000);
  };

  handleChange = e => {
    const { formData } = this.state;
    const field = e.target.name;
    formData[field] = e.target.value;
    this.setState({
      formData
    });
  };

  handleSend = () => {
    const { formData } = this.state;
    if (
      formData.subject &&
      formData.message &&
      validator.isEmail(formData.email)
    ) {
      setTimeout(
        () =>
          this.setState({
            isMsgSend: true,
            formData: {
              subject: "",
              message: ""
            }
          }),
        500
      );
    }
  };

  handleClose = () => {
    this.setState({
      isMsgSend: false
    });
  };

  render() {
    const { isMsgSend, formData, myEmail, isEmailCopied } = this.state;
    return (
      <React.Fragment>
        {isMsgSend ? (
          <PopUpModal
            modalHeader="Thank you for your message!"
            modalMessage="I will get back to you shortly."
            isModalOpen={isMsgSend}
            handleClose={this.handleClose}
          />
        ) : null}

        <form
          className="gform contacts-form"
          method="POST"
          data-email={myEmail}
          action="https://script.google.com/macros/s/AKfycbwmpk3mHxjdk4qyvkY_i7HK-O3ldBho6wYPQ_eCjKUBQmykXCra/exec"
        >
          <div className="form-header">
            <h4 className="form-header__title">Get In Touch With Me</h4>
          </div>
          <div className="form-subject">
            <div className="form-subject__to">
              <h4 className="form-subject__to__h4">To:</h4>
              <span className="form-subject__to__h4__email">{myEmail}</span>
              <CopyToClipboard text={myEmail} onCopy={this.handleCopy}>
                <span className="form-subject__to__h4__copy-btn">
                  <i class="fas fa-copy" /> {isEmailCopied}
                </span>
              </CopyToClipboard>
            </div>
            <div className="form-subject__section">
              <h4 className="form-subject__section__h4">Subject:</h4>
              <input
                name="subject"
                value={formData.subject}
                onChange={this.handleChange}
                className="form-subject__section__input"
                placeholder="Hello World!"
                required
              />
            </div>
          </div>
          <div className="form-body">
            <h4 className="form-body__h4">Message:</h4>
            <textarea
              name="message"
              value={formData.message}
              onChange={this.handleChange}
              className="form-body__text"
              placeholder="Message Body"
              required
            />
          </div>
          <div className="form-sender">
            <h4 className="form-sender__h4">From:</h4>
            <input
              name="email"
              type="email"
              className="form-sender__mail-addr"
              onChange={this.handleChange}
              value={formData.email}
              placeholder="sender@email.com"
              required
            />
          </div>
          <div className="form-send">
            <button
              className="form-send__btn"
              onClick={this.handleSend}
              type="submit"
            >
              <p className="form-send__btn__text">Send Message</p>
              <i className="form-send__btn__icon far fa-paper-plane" />
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}
