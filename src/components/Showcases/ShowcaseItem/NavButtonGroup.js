import React from "react";

import "./index.scss";
import showcaseData from "../showcaseData";
import ShowcaseContent from "./ShowcaseContent";

export default ({ index, handleChange, showcaseSlideIndex }) => (
  <React.Fragment>
    {showcaseSlideIndex === "0" ? (
      <button
        className={`showcase-top__nav__btn showcase-top__nav__btn--selected`}
        name={`showcaseItem${index}`}
        value="0"
        onClick={handleChange}
      >
        Introduction
      </button>
    ) : (
      <button
        className={`showcase-top__nav__btn `}
        name={`showcaseItem${index}`}
        value="0"
        onClick={handleChange}
      >
        Introduction
      </button>
    )}
    {showcaseSlideIndex === "1" ? (
      <button
        className={`showcase-top__nav__btn showcase-top__nav__btn--selected`}
        value="1"
        onClick={handleChange}
      >
        System Architecture
      </button>
    ) : (
      <button
        className={`showcase-top__nav__btn`}
        name={`showcaseItem${index}`}
        value="1"
        onClick={handleChange}
      >
        System Architecture
      </button>
    )}

    {showcaseSlideIndex === "2" ? (
      <button
        className={`showcase-top__nav__btn showcase-top__nav__btn--selected`}
        name={`showcaseItem${index}`}
        value="2"
        onClick={handleChange}
      >
        Technical Specification
      </button>
    ) : (
      <button
        className={`showcase-top__nav__btn `}
        name={`showcaseItem${index}`}
        value="2"
        onClick={handleChange}
      >
        Technical Specification
      </button>
    )}
  </React.Fragment>
);