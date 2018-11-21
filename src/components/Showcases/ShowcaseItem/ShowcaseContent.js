import React from "react";

import "./index.scss";
import showcaseData from "../showcaseData";
import SlideDesc from "./SlideDesc";
import SlideImg from "./SlideImg";

export default ({ itemData, index, showcaseSlideIndex }) => (
  <div className="showcase-content">
    <section
      className={`showcase-content__img-section showcase-content__img-section--showcase-${index}`}
    >
      <SlideImg itemData={itemData} showcaseSlideIndex={showcaseSlideIndex} />
    </section>
    <SlideDesc itemData={itemData} showcaseSlideIndex={showcaseSlideIndex} />
  </div>
);
