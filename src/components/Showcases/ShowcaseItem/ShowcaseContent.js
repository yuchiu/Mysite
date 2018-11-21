import React from "react";

import "./index.scss";
import showcaseData from "../showcaseData";

class ShowcaseContent extends React.Component {
  renderImgAccordingToSlideIndex = () => {
    const { itemData, showcaseSlideIndex } = this.props;
    if (showcaseSlideIndex === "1") {
      return (
        <img
          src={itemData.imgUrl.archDiagram}
          className="showcase-content__img-section__img"
          alt="showcase-img"
        />
      );
    }
    return (
      <img
        src={itemData.imgUrl.demoPic}
        className="showcase-content__img-section__img"
        alt="showcase-img"
      />
    );
  };

  renderDescAccordingToSlideIndex = () => {
    const { itemData, showcaseSlideIndex } = this.props;
    if (showcaseSlideIndex === "1") {
      return (
        <section className="showcase-content__desc-section">
          <p className="showcase-content__desc-section__desc">
            {itemData.archDesc}
          </p>
        </section>
      );
    }
    return (
      <section className="showcase-content__desc-section">
        <h4 className="showcase-content__desc-section__title">
          {itemData.name}
        </h4>
        <ul className="showcase-content__desc-section__tech-stack">
          {itemData.techStack.map((tech, i) => (
            <li
              key={`techlist-${i}`}
              className="showcase-content__desc-section__tech-stack__item"
            >
              {tech}
            </li>
          ))}
        </ul>
        <p className="showcase-content__desc-section__desc">
          {itemData.introDesc}
        </p>
      </section>
    );
  };

  render() {
    const { itemData, index, showcaseSlideIndex } = this.props;
    console.log(showcaseSlideIndex);
    return (
      <div className="showcase-content">
        <section
          className={`showcase-content__img-section showcase-content__img-section--showcase-${index}`}
        >
          {this.renderImgAccordingToSlideIndex()}
        </section>
        {this.renderDescAccordingToSlideIndex()}
      </div>
    );
  }
}

export default ShowcaseContent;
