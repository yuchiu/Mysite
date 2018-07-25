import React from "react";
import PropTypes from "prop-types";

const Project = ({ project }) => (
  <div key={project.id} className={`thumbnail ${project.category}`}>
    <div
      className="pic"
      style={{ backgroundImage: `url(${project.thumbnailImg})` }}
    />
    <div className="desc">
      <h2>{project.name}</h2>
      <p>
        {project.techStack.map((tech, i) => (
          <div style={{ display: "inline" }} key={i}>
            {" ∙ "}
            {tech}
          </div>
        ))}
      </p>
      <a
        href={`${project.githubLink}`}
        target="_blank"
        rel="noopener noreferrer"
        className="a-tag-btn sandy-two"
      >
        <i className="fa fa-external-link" />Github
      </a>
      <a
        href={`${project.demoLink}`}
        target="_blank"
        rel="noopener noreferrer"
        className="a-tag-btn sandy-two"
      >
        <i className="fa fa-external-link" />View
      </a>
    </div>
  </div>
);

Project.propTypes = {
  project: PropTypes.string
};

export default Project;
