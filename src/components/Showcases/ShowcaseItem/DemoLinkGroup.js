import React from "react";

import "./DemoLinkGroup.scss";

export default ({ itemData, showcaseSlideIndex }) => (
  <React.Fragment>
    <div className="demolink-group">
      <a
        className="demolink-group__btn a-tag-btn  gibson-one"
        rel="noopener noreferrer"
        target="_blank"
        href={itemData.githubLink}
      >
        <i className="fa fa-2x fa-github demolink-group__btn__icon" />{" "}
        <span className="demolink-group__btn__text">Github</span>
      </a>
      <a
        className="demolink-group__demo-btn a-tag-btn  gibson-three"
        rel="noopener noreferrer"
        target="_blank"
        href={itemData.demoLink}
      >
        <i className="fa fa-2x fa-video demolink-group__btn__icon" />
        <span className="demolink-group__btn__text">Demo</span>
      </a>
      <a
        className="demolink-group__demo-btn a-tag-btn  gibson-two"
        rel="noopener noreferrer"
        target="_blank"
        href={itemData.siteLink}
      >
        <i className="fa fa-2x fa-window-maximize demolink-group__btn__icon" />
        <span className="demolink-group__btn__text">Live Site</span>
      </a>
    </div>
  </React.Fragment>
);
