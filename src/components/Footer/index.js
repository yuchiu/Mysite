import React from "react";

import "./index.scss";

export default () => (
  <div className="footer">
    <nav className="footer__nav">
      <a
        className="footer__nav__link"
        href="https://github.com/yuchiu/my-site"
        target="_blank"
        rel="noopener noreferrer"
      >
        <b>Github repo of this site</b>
      </a>
      <p className="footer__nav__copyright">
        © 2019 <b>Yu Chiu</b>
      </p>
    </nav>
  </div>
);
