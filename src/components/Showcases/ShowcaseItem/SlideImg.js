import React from "react";

export default ({ itemData, showcaseSlideIndex }) => (
  <React.Fragment>
    {showcaseSlideIndex === "0" && (
      <img
        src={itemData.imgUrl.demoPic}
        className="showcase-content__img-section__img"
        alt="showcase-img"
      />
    )}
    {showcaseSlideIndex === "1" && (
      <img
        src={itemData.imgUrl.archDiagram}
        className="showcase-content__img-section__img"
        alt="showcase-img"
      />
    )}
  </React.Fragment>
);