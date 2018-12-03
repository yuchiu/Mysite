import React from "react";

import "./BtnSlide.scss";

export default ({ index, handleSlideLeft, showcaseSlideIndex }) => (
  <React.Fragment>
    {showcaseSlideIndex === "0" ? (
      <div className={`slide-btn-section`}>
        <button
          className={`slide-btn-section__btn slide-btn-section__btn--disabled`}
        >
          ⦑
        </button>
      </div>
    ) : (
      <div className={`slide-btn-section`}>
        <button
          name={`showcaseItem${index}`}
          className={`slide-btn-section__btn`}
          onClick={handleSlideLeft}
        >
          ⦑
        </button>
      </div>
    )}
  </React.Fragment>
);
