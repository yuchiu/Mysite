import React from "react";

import "./Contacts.scss";

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMsgSend: false
    };
  }

  handleSend = () => {
    this.setState({
      isMsgSend: true
    });
  };

  render() {
    const { isMsgSend } = this.state;
    return (
      <div className="contacts-section">
        <div className="msg-header">
          <h4 className="msg-header__title">Get In Touch With Me</h4>
        </div>
        <div className="msg-subject">
          <div className="msg-subject__to">
            <h4 className="msg-subject__to__h4">To:</h4> steven2002yc@gmail.com
          </div>
          <div className="msg-subject__section">
            <h4 className="msg-subject__section__h4">Subject:</h4>
            <input
              className="msg-subject__section__input"
              placeholder="Hello World!"
            />
          </div>
        </div>
        <div className="msg-body">
          <h4 className="msg-body__h4">Message:</h4>
          <textarea className="msg-body__text" placeholder="Message Body" />
        </div>
        <div className="msg-sender">
          <h4 className="msg-sender__h4">From:</h4>
          <input
            className="msg-sender__mail-addr"
            placeholder="sender@email.com"
          />
        </div>
        <div className="msg-send">
          <button className="msg-send__btn" onClick={this.handleSend}>
            <p className="msg-send__btn__text">Send Message</p>
            <i className="msg-send__btn__icon far fa-paper-plane" />
          </button>
        </div>
      </div>
    );
  }
}
