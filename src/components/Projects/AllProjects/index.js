import React from "react";
import PropTypes from "prop-types";

import "./index.scss";
import projectsData from "../projectsData";
import AllProjectsCard from "./AllProjectsCard";

export default ({ category }) => (
  <div className="all-projects">
    <ul className="all-projects__list">
      {projectsData.map(
        (project, i) =>
          (category === project.category || category === "all") && (
            <AllProjectsCard key={i} category={category} project={project} />
          )
      )}
    </ul>
  </div>
);
