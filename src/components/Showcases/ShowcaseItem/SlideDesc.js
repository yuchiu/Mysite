import React from "react";

import DemoLinkGroup from "./DemoLinkGroup";

export default ({ itemData, showcaseSlideIndex }) => (
  <React.Fragment>
    {showcaseSlideIndex === "0" && (
      <section className="showcase-content__detail">
        <div className="showcase-content__detail__desc">
          <h4 className="showcase-content__detail__desc__header">
            Introduction
            <h4 className="showcase-content__detail__desc__header__name">
              {itemData.name}
            </h4>
            <p className="showcase-content__detail__desc__header__text">
              {itemData.introDesc}
            </p>
          </h4>
          <ul className="showcase-content__detail__desc__tech-stack">
            <b className="showcase-content__detail__desc__tech-stack__bold">
              Tech Stack:
            </b>
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
          <p className="showcase-content__detail__desc__user-story">
            <b> User Stories:</b>
            {itemData.userStory.map((story, i) => (
              <p
                className="showcase-content__detail__desc__user-story__item"
                key={`story-${i}`}
              >
                {story}
              </p>
            ))}
          </p>
        </div>
        <DemoLinkGroup itemData={itemData} />
      </section>
    )}
    {showcaseSlideIndex === "1" && (
      <section className="showcase-content__detail">
        <div className="showcase-content__detail__desc">
          <h4 className="showcase-content__detail__desc__header">
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
          <h4 className="showcase-content__detail__desc__header">
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
