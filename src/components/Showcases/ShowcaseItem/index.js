import React from "react";

import "./index.scss";
import showcaseData from "../showcaseData";
import ShowcaseContent from "./ShowcaseContent";

class ShowcaseItem extends React.Component {
  render() {
    const { itemData, handleChange, index, showcaseSlideIndex } = this.props;
    return (
      <div className="showcases-item">
        <div className="showcase-top">
          <section className="showcase-top__showcases-nav-section">
            <button
              className="showcase-top__showcases-nav-section__btn"
              name={`showcaseItem${index}`}
              value="0"
              onClick={handleChange}
            >
              slide 1
            </button>
            <button
              className="showcase-top__showcases-nav-section__btn"
              name={`showcaseItem${index}`}
              value="1"
              onClick={handleChange}
            >
              slide 2
            </button>
            <button
              className="showcase-top__showcases-nav-section__btn"
              name={`showcaseItem${index}`}
              value="2"
              onClick={handleChange}
            >
              slide 3
            </button>
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
  }
}

export default ShowcaseItem;
