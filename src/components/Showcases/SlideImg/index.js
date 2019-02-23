import React from "react";

import "./index.scss";

export default ({ itemData, index, showcaseSlideIndex }) => (
  <section
    className={`showcase-content-img-section showcase-content-img-section--showcase-${index}`}
  >
    {showcaseSlideIndex === "0" && (
      <img
        src={itemData.imgUrl.demoPic}
        className="showcase-content-img-section__img"
        alt="showcase-img"
      />
    )}
    {showcaseSlideIndex === "1" && (
      <img
        src={itemData.imgUrl.demoVid}
        className="showcase-content-img-section__img"
        alt="showcase-img"
      />
    )}
    {showcaseSlideIndex === "2" && (
      <img
        src={itemData.imgUrl.archDiagram}
        className="showcase-content-img-section__img"
        alt="showcase-img"
      />
    )}
  </section>
);
