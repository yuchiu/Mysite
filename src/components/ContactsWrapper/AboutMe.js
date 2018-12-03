import React from "react";

import "./AboutMe.scss";

export default () => (
  <div className="about-wrapper">
    <h1 className="about-wrapper__title">About Me</h1>
    <div className="about-wrapper__intro">
      <p>Born in Hong Kong, Based in New York, Raised in the Internet.</p>
      <p>
        I am actively seeking for a position that allows me to meaningfully
        impact company growth, to expand upon my experience, as well as applying
        my skills in an innovative, collaborative environment. <br />
      </p>
      <p>Looking for amazing projects? Send me a message!</p>
    </div>
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
