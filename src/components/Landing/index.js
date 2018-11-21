import React from "react";

import "./index.scss";

export default () => (
  <div id="landing-wrapper" className="landing-wrapper">
    <div className="landing-content animated bounceInDown">
      {/* eslint-disable-next-line */}
      <p className="landing-content__intro">HI THERE, I'M YU.</p>
      <p className="landing-content__typing">
        Learner · Creator · Developer
        <span className="landing-content__typing__line">|</span>
      </p>
      <div className="landing-content__link">
        <a href="#showcases-wrapper" aria-hidden="true">
          <i className="landing-content__link__icon fa fa-angle-double-down fa-4x" />
        </a>
      </div>
    </div>
  </div>
);
