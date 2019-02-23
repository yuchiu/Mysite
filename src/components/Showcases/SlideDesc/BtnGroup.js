import React from "react";

import "./BtnGroup.scss";

export default ({ itemData, handleChange, showcaseSlideIndex, index }) => (
  <React.Fragment>
    <div className="btn-group">
      {showcaseSlideIndex === "0" ? (
        <button
          className="btn-group__btn a-tag-btn  gibson-three"
          name={`showcaseItem${index}`}
          value="0"
          onClick={handleChange}
        >
          <i className="fas fa-list-ul btn-group__btn__icon btn-group__btn__icon--selected" />
          <span className="btn-group__btn__text btn-group__btn__icon--selected">
            Tech Stack
          </span>
        </button>
      ) : (
        <button
          className="btn-group__btn a-tag-btn  gibson-three"
          name={`showcaseItem${index}`}
          value="0"
          onClick={handleChange}
        >
          <i className="fas fa-list-ul btn-group__btn__icon" />
          <span className="btn-group__btn__text">Tech Stack</span>
        </button>
      )}

      {showcaseSlideIndex === "1" ? (
        <button
          className="btn-group__btn a-tag-btn  gibson-three"
          name={`showcaseItem${index}`}
          value="1"
          onClick={handleChange}
        >
          <i className="fas fa-video btn-group__btn__icon btn-group__btn__icon--selected" />
          <span className="btn-group__btn__text btn-group__btn__text--selected">
            Demo
          </span>
        </button>
      ) : (
        <button
          className="btn-group__btn a-tag-btn  gibson-three"
          name={`showcaseItem${index}`}
          value="1"
          onClick={handleChange}
        >
          <i className="fas fa-video btn-group__btn__icon" />
          <span className="btn-group__btn__text">Demo</span>
        </button>
      )}
      {showcaseSlideIndex === "2" ? (
        <button
          className="btn-group__btn a-tag-btn  gibson-one"
          name={`showcaseItem${index}`}
          value="2"
          onClick={handleChange}
        >
          <i className="fas fa-sitemap btn-group__btn__icon btn-group__btn__icon--selected" />
          <span className="btn-group__btn__text btn-group__btn__text--selected">
            System
          </span>
        </button>
      ) : (
        <button
          className="btn-group__btn a-tag-btn  gibson-one"
          name={`showcaseItem${index}`}
          value="2"
          onClick={handleChange}
        >
          <i className="fas fa-sitemap btn-group__btn__icon" />
          <span className="btn-group__btn__text">System</span>
        </button>
      )}

      <a
        className="btn-group__btn a-tag-btn  gibson-two"
        rel="noopener noreferrer"
        target="_blank"
        href={itemData.siteLink}
      >
        <i className="far fa-browser btn-group__btn__icon" />
        <span className="btn-group__btn__text">Live Site</span>
        <i className="fas fa-external-link btn-group__btn__icon btn-group__btn__icon--link" />
      </a>
      <a
        className="btn-group__btn a-tag-btn  gibson-one"
        rel="noopener noreferrer"
        target="_blank"
        href={itemData.githubLink}
      >
        <i className="fab fa-github btn-group__btn__icon" />
        <span className="btn-group__btn__text">Github</span>
        <i className="fas fa-external-link btn-group__btn__icon btn-group__btn__icon--link" />
      </a>
    </div>
  </React.Fragment>
);
