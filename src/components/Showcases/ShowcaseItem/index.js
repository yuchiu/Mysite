import React from "react";

import "./index.scss";
import showcaseData from "../showcaseData";
import NavButtonGroup from "./NavButtonGroup";
import ShowcaseContent from "./ShowcaseContent";

export default ({ itemData, index, handleChange, showcaseSlideIndex }) => (
  <div className="showcases-item">
    <div className="showcase-top">
      <section className="showcase-top__nav">
        <NavButtonGroup
          index={index}
          handleChange={handleChange}
          showcaseSlideIndex={showcaseSlideIndex}
        />
      </section>
    </div>
    <ShowcaseContent
      itemData={itemData}
      index={index}
      showcaseSlideIndex={showcaseSlideIndex}
    />
    <div className="showcase-bottom">
      <button className="showcase-bottom__github-btn">Github</button>
      <button className="showcase-bottom__demo-btn">Demo</button>
    </div>
  </div>
);
