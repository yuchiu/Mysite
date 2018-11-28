import React from "react";

import "./index.scss";
import projectData from "../projectData";
import ProjectCard from "./ProjectCard";

export default ({ category }) => (
  <div className="all-projects">
    <ul className="all-projects__list">
      {projectData.map(
        (project, i) =>
          (category === project.category || category === "all") && (
            <ProjectCard key={i} category={category} project={project} />
          )
      )}
    </ul>
  </div>
);
