import React from "react";

import "./index.scss";

export default ({ itemData, index }) => (
  <section
    className={`showcase-content-img-section showcase-content-img-section--showcase-${index}`}
  >
    <img
      src={itemData.imgUrl.demoPic}
      className="showcase-content-img-section__img"
      alt="showcase-img"
    />
  </section>
);
