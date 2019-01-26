import React from "react";

import "./index.scss";
import SlideDesc from "./SlideDesc";
import SlideImg from "./SlideImg";

export default ({ itemData, index }) => (
  <div id={`showcase-item-${index + 1}`} className="showcases-item-wrapper">
    <div className="showcase-content">
      <div className="showcase-content__main">
        <section
          className={`showcase-content__main__img-section showcase-content__main__img-section--showcase-${index}`}
        >
          <SlideImg itemData={itemData} />
        </section>

        <SlideDesc itemData={itemData} />
      </div>
    </div>
  </div>
);
