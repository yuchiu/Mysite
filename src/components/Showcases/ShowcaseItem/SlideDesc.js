import React from "react";

export default ({ itemData, showcaseSlideIndex }) => (
  <React.Fragment>
    {showcaseSlideIndex === "0" && (
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
    )}
    {showcaseSlideIndex === "1" && (
      <section className="showcase-content__desc-section">
        <p className="showcase-content__desc-section__desc">
          {itemData.archDesc}
        </p>
      </section>
    )}
  </React.Fragment>
);
