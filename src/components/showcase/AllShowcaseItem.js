import React from "react";
import PropTypes from "prop-types";

const AllShowcaseItem = ({ project }) => (
  <div key={project.id} className={`project ${project.category}`}>
    <div
      className="project__pic"
      style={{ backgroundImage: `url(${project.thumbnailImg})` }}
    />
    <div className="project__desc">
      <h2 className="project__desc__name">{project.name}</h2>
      <p className="project__desc__tech">
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
        className="a-tag-btn sandy-two project__desc__link"
      >
        <i className="fa fa-external-link" />Github
      </a>
      <a
        href={`${project.demoLink}`}
        target="_blank"
        rel="noopener noreferrer"
        className="a-tag-btn sandy-two project__desc__link"
      >
        <i className="fa fa-external-link" />View
      </a>
    </div>
  </div>
);

AllShowcaseItem.propTypes = {
  project: PropTypes.string
};

export default AllShowcaseItem;
