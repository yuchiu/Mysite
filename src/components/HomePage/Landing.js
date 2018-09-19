import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
  <div className="home-page">
    <div className="landing animated bounceInDown">
      {/* eslint-disable-next-line */}
      <h1 className="landing__intro">HI THERE, I'M YU.</h1>
      <h2 className="landing__typing">
        Learner · Creator · Developer
        <span className="landing__typing__line">|</span>
      </h2>
      <div className="landing__link">
        <Link
          to="showcase"
          className="fa fa-code fa-4x landing__link__icon"
          id="arrow-icon"
          aria-hidden="true"
        />
      </div>
    </div>
  </div>
);

export default Landing;
