import React from "react";

export default ({ itemData, showcaseSlideIndex }) => (
  <React.Fragment>
    {showcaseSlideIndex === "0" && (
      <section className="showcase-content__desc-section">
        <h4 className="showcase-content__desc-section__title">Introduction</h4>
        <h4 className="showcase-content__desc-section__name">
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
        <p className="showcase-content__desc-section__user-story">
          {itemData.userStory}
        </p>
      </section>
    )}
    {showcaseSlideIndex === "1" && (
      <section className="showcase-content__desc-section">
        <h4 className="showcase-content__desc-section__title">
          System Architecture
        </h4>

        <p className="showcase-content__desc-section__desc">
          {itemData.archDesc}
        </p>
      </section>
    )}
    {showcaseSlideIndex === "2" && (
      <section className="showcase-content__desc-section">
        <h4 className="showcase-content__desc-section__title">
          Techinical Specification
        </h4>
      </section>
    )}
  </React.Fragment>
);
