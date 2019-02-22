import React from "react";

import "./DemoLinkGroup.scss";

export default ({ itemData }) => (
  <React.Fragment>
    <div className="demolink-group">
      <a
        className="demolink-group__btn a-tag-btn  gibson-three"
        rel="noopener noreferrer"
        target="_blank"
        href={itemData.demoLink}
      >
        <i className="fas fa-video demolink-group__btn__icon" />
        <span className="demolink-group__btn__text">Demo</span>
      </a>
      <a
        className="demolink-group__btn a-tag-btn  gibson-one"
        rel="noopener noreferrer"
        target="_blank"
        href={itemData.githubLink}
      >
        <i className="fas fa-sitemap demolink-group__btn__icon" />
        <span className="demolink-group__btn__text">System</span>
      </a>
      <a
        className="demolink-group__btn a-tag-btn  gibson-two"
        rel="noopener noreferrer"
        target="_blank"
        href={itemData.siteLink}
      >
        <i className="far fa-browser demolink-group__btn__icon" />
        <span className="demolink-group__btn__text">Live Site</span>
        <i className="fas fa-external-link demolink-group__btn__icon demolink-group__btn__icon--link" />
      </a>
      <a
        className="demolink-group__btn a-tag-btn  gibson-one"
        rel="noopener noreferrer"
        target="_blank"
        href={itemData.githubLink}
      >
        <i className="fab fa-github demolink-group__btn__icon" />
        <span className="demolink-group__btn__text">Github</span>
        <i className="fas fa-external-link demolink-group__btn__icon demolink-group__btn__icon--link" />
      </a>
    </div>
  </React.Fragment>
);
