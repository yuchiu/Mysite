import React from "react";

import "./index.scss";
import { defaultProjects } from "../projectsData";

const DefaultProjects = () => (
  <div className="default-projects">
    {defaultProjects.map((project, i) => (
      <a
        key={i}
        className={`default-projects__img default-projects__img--${project.id}`}
        style={{ backgroundImage: `url("${project.img}")` }}
        href={project.demoLink}
        rel="noopener noreferrer"
        target="_blank"
      />
    ))}
  </div>
);

export default DefaultProjects;
