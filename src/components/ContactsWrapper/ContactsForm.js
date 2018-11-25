import React from "react";

import "./ContactsForm.scss";
import { PopUpModal } from "../common";

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMsgSend: false
    };
  }

  handleSend = () => {
    setTimeout(
      () =>
        this.setState({
          isMsgSend: true
        }),
      500
    );
  };

  handleClose = () => {
    this.setState({
      isMsgSend: false
    });
  };

  render() {
    const { isMsgSend } = this.state;
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
          data-email="steven2002yc@gmail.com"
          action="https://script.google.com/macros/s/AKfycbwmpk3mHxjdk4qyvkY_i7HK-O3ldBho6wYPQ_eCjKUBQmykXCra/exec"
        >
          <div className="form-header">
            <h4 className="form-header__title">Get In Touch With Me</h4>
          </div>
          <div className="form-subject">
            <div className="form-subject__to">
              <h4 className="form-subject__to__h4">To:</h4>{" "}
              steven2002yc@gmail.com
            </div>
            <div className="form-subject__section">
              <h4 className="form-subject__section__h4">Subject:</h4>
              <input
                name="subject"
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
              className="form-body__text"
              placeholder="Message Body"
              required
            />
          </div>
          <div className="form-sender">
            <h4 className="form-sender__h4">From:</h4>
            <input
              className="form-sender__mail-addr"
              placeholder="sender@email.com"
              name="email"
              type="email"
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
