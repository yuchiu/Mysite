import React from "react";

import "./DemoLinkGroup.scss";

export default ({ itemData, showcaseSlideIndex }) => (
  <React.Fragment>
    {showcaseSlideIndex === "2" ? (
      <div className="demolink-group demolink-group--center">
        <a
          className="demolink-group__github-btn a-tag-btn  gibson-one"
          rel="noopener noreferrer"
          target="_blank"
          href={itemData.githubLink}
        >
          <i className="fa fa-2x fa-github" /> Github
        </a>
        <a
          className="demolink-group__demo-btn a-tag-btn  gibson-two"
          rel="noopener noreferrer"
          target="_blank"
          href={itemData.demoLink}
        >
          <i className="fa fa-2x fa-window-maximize" /> Demo
        </a>
      </div>
    ) : (
      <div className="demolink-group">
        <a
          className="demolink-group__github-btn a-tag-btn  gibson-one"
          rel="noopener noreferrer"
          target="_blank"
          href={itemData.githubLink}
        >
          <i className="fa fa-2x fa-github" /> Github
        </a>
        <a
          className="demolink-group__demo-btn a-tag-btn  gibson-two"
          rel="noopener noreferrer"
          target="_blank"
          href={itemData.demoLink}
        >
          <i className="fa fa-2x fa-window-maximize" /> Demo
        </a>
      </div>
    )}
  </React.Fragment>
);
