import React from "react";

export default ({ itemData }) => (
  <React.Fragment>
    <img
      src={itemData.imgUrl.demoPic}
      className="showcase-content__main__img-section__img"
      alt="showcase-img"
    />
  </React.Fragment>
);
