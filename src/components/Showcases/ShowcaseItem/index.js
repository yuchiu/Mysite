import React from "react";

import "./index.scss";
import showcaseData from "../showcaseData";
import NavBtnGroup from "./NavBtnGroup";
import SlideDesc from "./SlideDesc";
import SlideImg from "./SlideImg";
import BtnLeftSlide from "./BtnLeftSlide";
import BtnRightSlide from "./BtnRightSlide";

export default ({
  itemData,
  index,
  handleChange,
  handleSlideLeft,
  handleSlideRight,
  showcaseSlideIndex
}) => (
  <div className="showcases-item">
    <div className="showcase-top">
      <section className="showcase-top__nav">
        <NavBtnGroup
          index={index}
          handleChange={handleChange}
          showcaseSlideIndex={showcaseSlideIndex}
        />
      </section>
    </div>
    <div className="showcase-content">
      <BtnLeftSlide
        index={index}
        handleSlideLeft={handleSlideLeft}
        showcaseSlideIndex={showcaseSlideIndex}
      />
      <section
        className={`showcase-content__img-section showcase-content__img-section--showcase-${index}`}
      >
        <SlideImg itemData={itemData} showcaseSlideIndex={showcaseSlideIndex} />
      </section>
      <SlideDesc itemData={itemData} showcaseSlideIndex={showcaseSlideIndex} />
      <BtnRightSlide
        index={index}
        handleSlideRight={handleSlideRight}
        showcaseSlideIndex={showcaseSlideIndex}
      />
    </div>
    <div className="showcase-bottom">
      <a
        className="showcase-bottom__github-btn a-tag-btn  gibson-one"
        rel="noopener noreferrer"
        target="_blank"
        href={itemData.githubLink}
      >
        <i className="fa fa-2x fa-github" /> Github
      </a>
      <a
        className="showcase-bottom__demo-btn a-tag-btn  gibson-two"
        rel="noopener noreferrer"
        target="_blank"
        href={itemData.demoLink}
      >
        <i class="fa fa-2x fa-window-maximize" /> Demo
      </a>
    </div>
  </div>
);
