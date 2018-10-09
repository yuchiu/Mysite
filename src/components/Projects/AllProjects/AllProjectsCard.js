import React from "react";
import PropTypes from "prop-types";

import "./AllProjectsCard.scss";

const AllProjectsCard = ({ project }) => (
  <li className={`project ${project.category}`}>
    <div className="card-deck">
      <div className="proj-card">
        <img
          className="proj-card__img"
          src={`${project.thumbnailImg}`}
          alt="img"
        />
        <div className="proj-card__overlay">
          <h3 className="proj-card__overlay__title">{project.name}</h3>
          <p className="proj-card__overlay__desc" />
          <p className="proj-card__overlay__tech">
            {project.techStack.map((tech, i) => (
              <div
                className="proj-card__overlay__tech__text"
                style={{ display: "inline" }}
                key={i}
              >
                {" "}
                {i === 0 ? "" : " ∙ "}
                {tech}
              </div>
            ))}
          </p>
          <div className="proj-card__overlay__btn-group">
            {" "}
            <a
              href={`${project.githubLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="a-tag-btn sandy-two proj-card__overlay__btn-group__link"
            >
              <i className="fa fa-external-link" />
              Github
            </a>
            <a
              href={`${project.demoLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="a-tag-btn sandy-two proj-card__overlay__btn-group__link"
            >
              <i className="fa fa-external-link" />
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  </li>
);

AllProjectsCard.propTypes = {
  project: PropTypes.object
};

export default AllProjectsCard;
