import React from "react";

import "./BtnSlide.scss";

export default ({ index, handleSlideRight, showcaseSlideIndex }) => (
  <React.Fragment>
    {showcaseSlideIndex === "2" ? (
      <div className={`slide-btn-section`}>
        <button
          className={`slide-btn-section__btn slide-btn-section__btn--disabled`}
        >
          &#12297;
        </button>
      </div>
    ) : (
      <div className={`slide-btn-section`}>
        <button
          name={`showcaseItem${index}`}
          className={`slide-btn-section__btn slide-btn-section__btn--right`}
          onClick={handleSlideRight}
        >
          &#12297;
        </button>
      </div>
    )}
  </React.Fragment>
);
