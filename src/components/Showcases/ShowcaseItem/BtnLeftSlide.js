import React from "react";

export default ({ index, handleSlideLeft, showcaseSlideIndex }) => (
  <React.Fragment>
    {showcaseSlideIndex === "0" ? (
      <div className={`showcase-content__left-btn-section`}>
        <button
          className={`showcase-content__left-btn-section__btn showcase-content__left-btn-section__btn--disabled`}
        >
          disabled left button
        </button>
      </div>
    ) : (
      <div className={`showcase-content__left-btn-section`}>
        <button
          name={`showcaseItem${index}`}
          className={`showcase-content__left-btn-section__btn`}
          onClick={handleSlideLeft}
        >
          left button
        </button>
      </div>
    )}
  </React.Fragment>
);
