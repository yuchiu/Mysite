import React from "react";

import "./index.scss";
import BtnGroup from "./BtnGroup";
import TechStack from "./TechStack";

export default ({ itemData, handleChange, showcaseSlideIndex, index }) => (
  <section className="showcase-content-detail">
    <div className="showcase-content-detail__desc">
      <TechStack itemData={itemData} />
    </div>
    <BtnGroup
      index={index}
      itemData={itemData}
      handleChange={handleChange}
      showcaseSlideIndex={showcaseSlideIndex}
    />
  </section>
);
