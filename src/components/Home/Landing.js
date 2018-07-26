import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
  <div className="home-page">
    <div className="landing animated bounceInDown">
      {/* eslint-disable-next-line */}
      <h1 className="landing__intro">HI THERE, I'M YU.</h1>
      <h2 className="landing__typing">
        Learner · Creator · Developer<span className="landing__typing__line">
          |
        </span>
      </h2>
      <div className="landing__contacts">
        <a
          className="landing__contacts__icon"
          href="https://github.com/yuchiu"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-github fa-2x" aria-hidden="true" />
        </a>
        <a
          className="landing__contacts__icon"
          href="https://www.freecodecamp.org/yuchiu"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-free-code-camp fa-2x" aria-hidden="true" />
        </a>
        <a
          className="landing__contacts__icon"
          href="https://codepen.io/yuchiu/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-codepen fa-2x" aria-hidden="true" />
        </a>
        <a
          className="landing__contacts__icon"
          href="mailto:steven2002yc@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fa fa-envelope fa-2x" aria-hidden="true" />
        </a>
      </div>
      <div className="landing__link">
        <Link
          to="showcase"
          className="fa fa-code fa-3x landing__link__icon"
          id="arrow-icon"
          aria-hidden="true"
        />
      </div>
    </div>
  </div>
);

export default Landing;
