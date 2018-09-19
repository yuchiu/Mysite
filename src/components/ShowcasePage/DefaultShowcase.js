import React from "react";
import { defaultProjects } from "@/assets/projects";

import "./DefaultShowcase.scss";

const DefaultShowcase = () => (
  <div className="default-showcase">
    {defaultProjects.map((project, i) => (
      <a
        key={i}
        className={`default-showcase__img default-showcase__img--${project.id}`}
        style={{ backgroundImage: `url("${project.img}")` }}
        href={project.demoLink}
        rel="noopener noreferrer"
        target="_blank"
      />
    ))}
  </div>
);

export default DefaultShowcase;
