import React from "react";

import "./AboutMe.scss";

export default () => (
  <div className="about">
    <h1 className="about__title">About Me</h1>
    <div className="about__intro">
      <p>
        Born in Hong Kong, Raised in New York, Became a digital nomad in the
        Internet.
      </p>
      <p>
        This site and the projects were designed and built by hand from ground
        up. Check out my code on{" "}
        <a
          href="https://github.com/yuchiu"
          target="_blank"
          rel="noopener noreferrer"
        >
          <b>Github</b>
        </a>
        !<br />
        Looking for amazing projects? Send me a message!
      </p>
      <p>
        I am actively seeking for a position that allows me to meaningfully
        impact company growth, to expand upon my experience, as well as applying
        my skills in an innovative, collaborative environment. <br />
        Intrested in hiring me? Send me a message!
      </p>
    </div>
  </div>
);
