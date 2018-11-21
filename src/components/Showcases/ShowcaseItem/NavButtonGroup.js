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
        slide 1
      </button>
    ) : (
      <button
        className={`showcase-top__nav__btn `}
        name={`showcaseItem${index}`}
        value="0"
        onClick={handleChange}
      >
        slide 1
      </button>
    )}
    {showcaseSlideIndex === "1" ? (
      <button
        className={`showcase-top__nav__btn showcase-top__nav__btn--selected`}
        value="1"
        onClick={handleChange}
      >
        slide 2
      </button>
    ) : (
      <button
        className={`showcase-top__nav__btn`}
        name={`showcaseItem${index}`}
        value="1"
        onClick={handleChange}
      >
        slide 2
      </button>
    )}

    {showcaseSlideIndex === "2" ? (
      <button
        className={`showcase-top__nav__btn showcase-top__nav__btn--selected`}
        name={`showcaseItem${index}`}
        value="2"
        onClick={handleChange}
      >
        slide 3
      </button>
    ) : (
      <button
        className={`showcase-top__nav__btn `}
        name={`showcaseItem${index}`}
        value="2"
        onClick={handleChange}
      >
        slide 3
      </button>
    )}
  </React.Fragment>
);
