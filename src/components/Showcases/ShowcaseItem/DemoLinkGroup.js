import React from "react";

export default ({ itemData }) => (
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
      <i class="fa fa-2x fa-window-maximize" /> Demo
    </a>
  </div>
);
