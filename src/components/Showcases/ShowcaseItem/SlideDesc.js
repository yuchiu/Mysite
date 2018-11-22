import React from "react";

export default ({ itemData, showcaseSlideIndex }) => (
  <React.Fragment>
    {showcaseSlideIndex === "0" && (
      <section className="showcase-content__desc-section">
        <h4 className="showcase-content__desc-section__title">Introduction</h4>
        <h4 className="showcase-content__desc-section__name">
          {itemData.name}
        </h4>
        <p className="showcase-content__desc-section__desc">
          {itemData.introDesc}
        </p>
        <b>Tech Stack:</b>
        <ul className="showcase-content__desc-section__tech-stack">
          {itemData.techStack.map((tech, i) => (
            <p
              className="showcase-content__desc-section__tech-stack__item"
              key={`techlist-${i}`}
            >
              {i === 0 ? "" : ", "}
              {tech}
            </p>
          ))}
        </ul>
        <b> User Stories:</b>
        <p className="showcase-content__desc-section__user-story">
          {itemData.userStory.map((story, i) => (
            <p key={`story-${i}`}>{story}</p>
          ))}
        </p>
      </section>
    )}
    {showcaseSlideIndex === "1" && (
      <section className="showcase-content__desc-section">
        <h4 className="showcase-content__desc-section__title">
          System Architecture
        </h4>

        <p className="showcase-content__desc-section__desc">
          Under Construction
        </p>
      </section>
    )}
    {showcaseSlideIndex === "2" && (
      <section className="showcase-content__desc-section">
        <h4 className="showcase-content__desc-section__title">
          Techinical Specification
        </h4>
        <p className="showcase-content__desc-section__desc">
          Under Construction
        </p>
      </section>
    )}
  </React.Fragment>
);
