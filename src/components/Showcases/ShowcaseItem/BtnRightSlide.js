import React from "react";

export default ({ index, handleSlideRight, showcaseSlideIndex }) => (
  <React.Fragment>
    {showcaseSlideIndex === "2" ? (
      <div className={`showcase-content__right-btn-section`}>
        <button
          className={`showcase-content__left-btn-section__btn showcase-content__left-btn-section__btn--disabled`}
        >
          disabled right button
        </button>
      </div>
    ) : (
      <div className={`showcase-content__right-btn-section`}>
        <button
          name={`showcaseItem${index}`}
          className={`showcase-content__right-btn-section__btn`}
          onClick={handleSlideRight}
        >
          right button
        </button>
      </div>
    )}
  </React.Fragment>
);
