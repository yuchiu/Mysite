import React from "react";

import DemoLinkGroup from "./DemoLinkGroup";

export default ({ itemData, showcaseSlideIndex }) => (
  <React.Fragment>
    {showcaseSlideIndex === "0" && (
      <section className="showcase-content__detail">
        <div className="showcase-content__detail__desc">
          <h4 className="showcase-content__detail__desc__title">
            Introduction
          </h4>
          <h4 className="showcase-content__detail__desc__name">
            {itemData.name}
          </h4>
          <p className="showcase-content__detail__desc__text">
            {itemData.introDesc}
          </p>
          <b>Tech Stack:</b>
          <ul className="showcase-content__detail__desc__tech-stack">
            {itemData.techStack.map((tech, i) => (
              <p
                className="showcase-content__detail__desc__tech-stack__item"
                key={`techlist-${i}`}
              >
                {i === 0 ? "" : ", "}
                {tech}
              </p>
            ))}
          </ul>
          <b> User Stories:</b>
          <p className="showcase-content__detail__desc__user-story">
            {itemData.userStory.map((story, i) => (
              <p key={`story-${i}`}>{story}</p>
            ))}
          </p>
        </div>
        <DemoLinkGroup itemData={itemData} />
      </section>
    )}
    {showcaseSlideIndex === "1" && (
      <section className="showcase-content__detail">
        <div className="showcase-content__detail__desc">
          <h4 className="showcase-content__detail__desc__title">
            System Architecture
          </h4>

          <p className="showcase-content__detail__desc__text">
            Under Construction
          </p>
        </div>
        <DemoLinkGroup itemData={itemData} />
      </section>
    )}
    {showcaseSlideIndex === "2" && (
      <section className="showcase-content__detail">
        <div className="showcase-content__detail__desc">
          <h4 className="showcase-content__detail__desc__title">
            Techinical Specification
          </h4>
          <p className="showcase-content__detail__desc__text">
            Under Construction
          </p>
        </div>
        <DemoLinkGroup itemData={itemData} />
      </section>
    )}
  </React.Fragment>
);
