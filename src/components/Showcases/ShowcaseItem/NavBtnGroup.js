import React from "react";

import "./NavBtnGroup.scss";

export default ({ index, handleChange, showcaseSlideIndex }) => (
  <React.Fragment>
    {showcaseSlideIndex === "0" ? (
      <div className={`showcase-top__nav__item`}>
        <button
          className="showcase-top__nav__item__text showcase-top__nav__item__text--selected"
          name={`showcaseItem${index}`}
          value="0"
          onClick={handleChange}
        >
          Introduction
        </button>
        <button
          className={`showcase-top__nav__item__btn showcase-top__nav__item__btn--selected`}
          name={`showcaseItem${index}`}
          value="0"
          onClick={handleChange}
        >
          {" "}
        </button>
      </div>
    ) : (
      <div className={`showcase-top__nav__item`}>
        <button
          className="showcase-top__nav__item__text"
          name={`showcaseItem${index}`}
          value="0"
          onClick={handleChange}
        >
          Introduction
        </button>
        <button
          className={`showcase-top__nav__item__btn `}
          name={`showcaseItem${index}`}
          value="0"
          onClick={handleChange}
        >
          {" "}
        </button>
      </div>
    )}
    {showcaseSlideIndex === "1" ? (
      <div className={`showcase-top__nav__item`}>
        <button
          className="showcase-top__nav__item__text showcase-top__nav__item__text--selected"
          name={`showcaseItem${index}`}
          value="1"
          onClick={handleChange}
        >
          System Design
        </button>
        <button
          className={`showcase-top__nav__item__btn showcase-top__nav__item__btn--selected`}
          value="1"
          onClick={handleChange}
        >
          {" "}
        </button>
      </div>
    ) : (
      <div className={`showcase-top__nav__item`}>
        <button
          className="showcase-top__nav__item__text"
          name={`showcaseItem${index}`}
          value="1"
          onClick={handleChange}
        >
          System Design
        </button>
        <button
          className={`showcase-top__nav__item__btn`}
          name={`showcaseItem${index}`}
          value="1"
          onClick={handleChange}
        >
          {" "}
        </button>
      </div>
    )}

    {showcaseSlideIndex === "2" ? (
      <div className={`showcase-top__nav__item`}>
        <button
          className="showcase-top__nav__item__text showcase-top__nav__item__text--selected"
          name={`showcaseItem${index}`}
          value="2"
          onClick={handleChange}
        >
          Technical Specification
        </button>
        <button
          className={`showcase-top__nav__item__btn showcase-top__nav__item__btn--selected`}
          name={`showcaseItem${index}`}
          value="2"
          onClick={handleChange}
        >
          {" "}
        </button>
      </div>
    ) : (
      <div className={`showcase-top__nav__item`}>
        <button
          className="showcase-top__nav__item__text"
          name={`showcaseItem${index}`}
          value="2"
          onClick={handleChange}
        >
          Technical Specification
        </button>
        <button
          className={`showcase-top__nav__item__btn `}
          name={`showcaseItem${index}`}
          value="2"
          onClick={handleChange}
        >
          {" "}
        </button>
      </div>
    )}
  </React.Fragment>
);
