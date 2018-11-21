import React from "react";

import "./Contacts.scss";

export default () => (
  <div className="contacts-section">
    <div className="contacts">
      <h1 className="contacts__header">Get In Touch With Me</h1>
      <br />
      <div className="contacts__box">
        <div className="contacts__box__border">
          <a
            href="https://github.com/yuchiu"
            className="contacts__box__border__btn a-tag-btn victoria-one"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="contacts__box__border__btn__icon fa fa-github" />
            <br />
            <p className="contacts__box__border__btn__name">GitHub</p>
          </a>
        </div>
      </div>
      <div className="contacts__box">
        <div className="contacts__box__border">
          <a
            href="mailto:steven2002yc@gmail.com"
            className="contacts__box__border__btn a-tag-btn victoria-two"
          >
            <i className="contacts__box__border__btn__icon fa fa-envelope" />
            <br />
            <p className="contacts__box__border__btn__name">
              steven2002yc@gmail.com
            </p>
          </a>
        </div>
      </div>
      <div className="contacts__box">
        <div className="contacts__box__border">
          <a
            href="https://www.freecodecamp.org/yuchiu"
            className="contacts__box__border__btn a-tag-btn victoria-three"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="contacts__box__border__btn__icon fa fa-free-code-camp" />
            <br />
            <p className="contacts__box__border__btn__name">FreeCodeCamp</p>
          </a>
        </div>
      </div>
      <div className="contacts__box">
        <div className="contacts__box__border">
          <a
            href="https://codepen.io/yuchiu/"
            className="contacts__box__border__btn a-tag-btn victoria-four"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="contacts__box__border__btn__icon fa fa-codepen" />
            <br />
            <p className="contacts__box__border__btn__name">CodePen</p>
          </a>
        </div>
      </div>
    </div>
  </div>
);
