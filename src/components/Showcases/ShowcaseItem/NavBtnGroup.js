import React from "react";

export default ({ index, handleChange, showcaseSlideIndex }) => (
  <React.Fragment>
    {showcaseSlideIndex === "0" ? (
      <div className={`showcase-top__nav__item`}>
        Introduction
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
        Introduction
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
        System Architecture
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
        System Architecture
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
        Technical Specification
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
        Technical Specification
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
