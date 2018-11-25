import React from "react";

export default ({ itemData, showcaseSlideIndex }) => (
  <React.Fragment>
    {showcaseSlideIndex === "0" && (
      <img
        src={itemData.imgUrl.demoPic}
        className="showcase-content__main__img-section__img"
        alt="showcase-img"
      />
    )}
    {showcaseSlideIndex === "1" && (
      <img
        src={itemData.imgUrl.archDiagram}
        className="showcase-content__main__img-section__img showcase-content__main__img-section__img--large"
        alt="showcase-img"
      />
    )}
    {showcaseSlideIndex === "2" && (
      <img
        src={itemData.imgUrl.techPic}
        className="showcase-content__main__img-section__img"
        alt="showcase-img"
      />
    )}
  </React.Fragment>
);
