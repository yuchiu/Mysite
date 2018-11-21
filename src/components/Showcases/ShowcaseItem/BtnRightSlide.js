import React from "react";

export default ({ index, handleSlideRight, showcaseSlideIndex }) => (
  <React.Fragment>
    {showcaseSlideIndex === "2" ? (
      <div className={`showcase-content__slide-btn-section`}>
        <button
          className={`showcase-content__slide-btn-section__btn showcase-content__slide-btn-section__btn--disabled`}
        >
          {">>"}
        </button>
      </div>
    ) : (
      <div className={`showcase-content__slide-btn-section`}>
        <button
          name={`showcaseItem${index}`}
          className={`showcase-content__slide-btn-section__btn`}
          onClick={handleSlideRight}
        >
          {">>"}
        </button>
      </div>
    )}
  </React.Fragment>
);
