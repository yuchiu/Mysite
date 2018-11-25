import React from "react";

import "./Contacts.scss";

export default () => (
  <div className="contacts-section">
    <div className="msg-header">
      <h4 className="msg-header__title">Get in touch with me</h4>
    </div>
    <div className="msg-subject">
      <div className="msg-subject__to">
        <h4 className="msg-subject__to__h4">to:</h4> steven2002yc@gmail.com
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
      <h4 className="msg-body__h4">message:</h4>
      <textarea className="msg-body__text" placeholder="Message Body" />
    </div>
    <div className="msg-sender">
      <h4 className="msg-sender__h4">from:</h4>
      <input className="msg-sender__mail-addr" placeholder="sender@email.com" />
    </div>
    <div className="msg-send-btn">
      <button className="msg-send-btn__btn">Send</button>
    </div>
  </div>
);
