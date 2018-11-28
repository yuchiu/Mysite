import React from "react";

import "./index.scss";
import showcaseData from "../showcaseData";
import NavBtnGroup from "./NavBtnGroup";
import SlideDesc from "./SlideDesc";
import SlideImg from "./SlideImg";
import BtnLeftSlide from "./BtnLeftSlide";
import BtnRightSlide from "./BtnRightSlide";
import { DownRefArrow } from "../../common";

export default ({
  itemData,
  index,
  handleChange,
  handleSlideLeft,
  handleSlideRight,
  showcaseSlideIndex
}) => (
  <div id={`showcase-item-${index + 1}`} className="showcases-item-wrapper">
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
      <div className="showcase-content__main">
        {showcaseSlideIndex === "2" ? (
          <section
            className={`showcase-content__main__img-section showcase-content__main__img-section--wide showcase-content__main__img-section--showcase-${index} `}
          />
        ) : (
          <section
            className={`showcase-content__main__img-section showcase-content__main__img-section--showcase-${index}`}
          >
            <SlideImg
              itemData={itemData}
              showcaseSlideIndex={showcaseSlideIndex}
            />
          </section>
        )}

        <SlideDesc
          itemData={itemData}
          showcaseSlideIndex={showcaseSlideIndex}
        />
      </div>
      <BtnRightSlide
        index={index}
        handleSlideRight={handleSlideRight}
        showcaseSlideIndex={showcaseSlideIndex}
      />
    </div>
  </div>
);
