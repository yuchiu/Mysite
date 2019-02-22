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
            <i className="social__box__border__btn__icon fab fa-github" />
            <br />
            <p className="social__box__border__btn__name">GitHub</p>
          </a>
        </div>
      </div>
      <div className="social__box">
        <div className="social__box__border">
          <a
            href="https://linkedin.com/in/yu-chiu"
            className="social__box__border__btn a-tag-btn victoria-two"
            rel="noopener noreferrer"
            target="_blank"
          >
            <i className="social__box__border__btn__icon fab fa-linkedin" />
            <br />
            <p className="social__box__border__btn__name">LinkedIn</p>
          </a>
        </div>
      </div>
    </div>
  </div>
);
