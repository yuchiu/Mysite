import React from "react";
import PropTypes from "prop-types";

import "./ProjectCard.scss";

export default ({ project }) => (
  <li className={`project ${project.category}`}>
    <div className="card-deck">
      <div className="proj-card">
        <div className="proj-card__img">
          <img
            className="proj-card__img__thumbnail"
            src={`${project.thumbnailImg}`}
            alt="img"
          />
        </div>
        <div className="proj-card__overlay">
          <h3 className="proj-card__overlay__title">{project.name}</h3>
          <p className="proj-card__overlay__desc" />
          <div className="proj-card__overlay__tech">
            {project.techStack.map((tech, i) => (
              <p
                className="proj-card__overlay__tech__text"
                style={{ display: "inline" }}
                key={i}
              >
                {" "}
                {i === 0 ? "" : " ∙ "}
                {tech}
              </p>
            ))}
          </div>
          <div className="proj-card__overlay__btn-group">
            {" "}
            <a
              href={`${project.githubLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="a-tag-btn sandy-two proj-card__overlay__btn-group__link"
            >
              <i className="fa fa-github" />
              Github
            </a>
            <a
              href={`${project.demoLink}`}
              target="_blank"
              rel="noopener noreferrer"
              className="a-tag-btn sandy-two proj-card__overlay__btn-group__link"
            >
              <i className="fa fa-window-maximize" />
              Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  </li>
);
