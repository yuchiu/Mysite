import React from "react";

export default ({ index, handleSlideLeft, showcaseSlideIndex }) => (
  <React.Fragment>
    {showcaseSlideIndex === "0" ? (
      <div className={`showcase-content__slide-btn-section`}>
        <button
          className={`showcase-content__slide-btn-section__btn showcase-content__slide-btn-section__btn--disabled`}
        >
          {"<<"}
        </button>
      </div>
    ) : (
      <div className={`showcase-content__slide-btn-section`}>
        <button
          name={`showcaseItem${index}`}
          className={`showcase-content__slide-btn-section__btn`}
          onClick={handleSlideLeft}
        >
          {"<<"}
        </button>
      </div>
    )}
  </React.Fragment>
);
