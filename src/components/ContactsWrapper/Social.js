import React from "react";

import "./Social.scss";

export default () => (
  <div className="about-wrapper">
    <div className="social">
      <div className="social__box">
        <div className="social__box__border">
          <a
            href="https://github.com/yuchiu"
            className="social__box__border__btn a-tag-btn victoria-one"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="social__box__border__btn__icon fa fa-github" />
            <br />
            <p className="social__box__border__btn__name">GitHub</p>
          </a>
        </div>
      </div>
      <div className="social__box">
        <div className="social__box__border">
          <a
            href="https://linkedin.com/in/yu-chiu"
            className="social__box__border__btn a-tag-btn victoria-four"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="social__box__border__btn__icon fa fa-linkedin" />
            <br />
            <p className="social__box__border__btn__name">Linkedin</p>
          </a>
        </div>
      </div>
      <div className="social__box">
        <div className="social__box__border">
          <a
            href="https://codepen.io/yuchiu/"
            className="social__box__border__btn a-tag-btn victoria-four"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="social__box__border__btn__icon fa fa-codepen" />
            <br />
            <p className="social__box__border__btn__name">CodePen</p>
          </a>
        </div>
      </div>
    </div>
  </div>
);
