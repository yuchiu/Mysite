import React from "react";

import "./index.scss";
import showcaseData from "../showcaseData";
import SlideDesc from "./SlideDesc";
import SlideImg from "./SlideImg";

export default ({
  itemData,
  index,
  showcaseSlideIndex,
  handleSlideRight,
  handleSlideLeft
}) => (
  <div className="showcase-content">
    <div>
      <button
        name={`showcaseItem${index}`}
        className={`showcase-content__left-btn`}
        onClick={handleSlideLeft}
      >
        left button
      </button>
    </div>
    <section
      className={`showcase-content__img-section showcase-content__img-section--showcase-${index}`}
    >
      <SlideImg itemData={itemData} showcaseSlideIndex={showcaseSlideIndex} />
    </section>
    <SlideDesc itemData={itemData} showcaseSlideIndex={showcaseSlideIndex} />
    <div>
      <button
        name={`showcaseItem${index}`}
        className={`showcase-content__right-btn`}
        onClick={handleSlideRight}
      >
        right button
      </button>
    </div>
  </div>
);
