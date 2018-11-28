import React from "react";

import DemoLinkGroup from "./DemoLinkGroup";

export default ({ itemData, showcaseSlideIndex }) => (
  <React.Fragment>
    {showcaseSlideIndex === "0" && (
      <section className="showcase-content__main__detail">
        <div className="showcase-content__main__detail__desc">
          <div className="showcase-content__main__detail__desc__header">
            <h4 className="showcase-content__main__detail__desc__header__title">
              Introduction
            </h4>
            <h4 className="showcase-content__main__detail__desc__header__name">
              {itemData.name}
            </h4>
            <h4 className="showcase-content__main__detail__desc__header__time">
              {itemData.time}
            </h4>
            <ul className="showcase-content__main__detail__desc__header__tech-stack">
              <b className="showcase-content__main__detail__desc__header__tech-stack__bold">
                FrontEnd Stack
              </b>
              {itemData.clientTechStack.map((tech, i) => (
                <p
                  className="showcase-content__main__detail__desc__header__tech-stack__item"
                  key={`techlist-client-${i}`}
                >
                  {i === 0 ? (
                    ""
                  ) : (
                    <span className="showcase-content__main__detail__desc__header__tech-stack__item__dot">
                      •
                    </span>
                  )}
                  {tech}
                </p>
              ))}
              <br />
              <br />
              <b className="showcase-content__main__detail__desc__header__tech-stack__bold">
                BackEnd Stack
              </b>
              {itemData.serverTechStack.map((tech, i) => (
                <p
                  className="showcase-content__main__detail__desc__header__tech-stack__item"
                  key={`techlist-server-${i}`}
                >
                  {i === 0 ? (
                    ""
                  ) : (
                    <span className="showcase-content__main__detail__desc__header__tech-stack__item__dot">
                      •
                    </span>
                  )}
                  {tech}
                </p>
              ))}
            </ul>
          </div>
          <div className="showcase-content__main__detail__desc__text showcase-content__main__detail__desc__text--intro">
            <b>Descriptions</b>
            <p>{itemData.introDesc}</p>
          </div>
          <br />
          <br />
          <p className="showcase-content__main__detail__desc__user-story">
            <b> User Stories</b>
            {itemData.userStory.map((story, i) => (
              <p
                className="showcase-content__main__detail__desc__user-story__item"
                key={`story-${i}`}
              >
                {story}
              </p>
            ))}
          </p>
        </div>
        <DemoLinkGroup
          showcaseSlideIndex={showcaseSlideIndex}
          itemData={itemData}
        />
      </section>
    )}
    {showcaseSlideIndex === "1" && (
      <section className="showcase-content__main__detail">
        <div className="showcase-content__main__detail__desc showcase-content__main__detail__desc--pushup">
          <div className="showcase-content__main__detail__desc__header">
            <h4 className="showcase-content__main__detail__desc__header__title">
              System Design
            </h4>
          </div>
          <p className="showcase-content__main__detail__desc__text">
            {itemData.archDesc}
          </p>
        </div>
        <DemoLinkGroup
          showcaseSlideIndex={showcaseSlideIndex}
          itemData={itemData}
        />
      </section>
    )}
    {showcaseSlideIndex === "2" && (
      <section className="showcase-content__main__detail">
        <div className="showcase-content__main__detail__desc  showcase-content__main__detail__desc--pushup">
          <div className="showcase-content__main__detail__desc__header">
            <h4 className="showcase-content__main__detail__desc__header__title">
              Techinical Specification
            </h4>
          </div>
          <p className="showcase-content__main__detail__desc__text">
            {itemData.techSpecDesc}
          </p>
        </div>
        <DemoLinkGroup
          showcaseSlideIndex={showcaseSlideIndex}
          itemData={itemData}
        />
      </section>
    )}
  </React.Fragment>
);
