import React from "react";

import "./index.scss";
import { DownRefArrow } from "../common";

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
        <DownRefArrow idhref="#showcases-wrapper" dark={false} />
      </div>
    </div>
  </div>
);
