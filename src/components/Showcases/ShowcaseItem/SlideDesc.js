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
            <p className="showcase-content__main__detail__desc__header__text">
              {itemData.introDesc}
            </p>
          </div>
          <br />
          <ul className="showcase-content__main__detail__desc__tech-stack">
            <b className="showcase-content__main__detail__desc__tech-stack__bold">
              FrontEnd Tech Stack
            </b>
            {itemData.clientTechStack.map((tech, i) => (
              <p
                className="showcase-content__main__detail__desc__tech-stack__item"
                key={`techlist-client-${i}`}
              >
                {i === 0 ? "" : ", "}
                {tech}
              </p>
            ))}
            <br />
            <br />
            <b className="showcase-content__main__detail__desc__tech-stack__bold">
              BackEnd Tech Stack
            </b>
            {itemData.serverTechStack.map((tech, i) => (
              <p
                className="showcase-content__main__detail__desc__tech-stack__item"
                key={`techlist-server-${i}`}
              >
                {i === 0 ? "" : ", "}
                {tech}
              </p>
            ))}
          </ul>
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
        <div className="showcase-content__main__detail__desc">
          <div className="showcase-content__main__detail__desc__header">
            <h4 className="showcase-content__main__detail__desc__header__title">
              System Architecture
            </h4>
            <p className="showcase-content__main__detail__desc__header__text">
              Under Constructions
              {/* {itemData.archDesc} */}
              "Users can register and log in with their account", "Users can
              edit his/her profile info, including profile image & password",
              "Users can create team", "Teams description can be edited only by
              admin", "Users can invite people to join their team", "Users can
              create channel inside his/her team", "Channels can be public or
              private for invited members only", "Channels description can be
              edited", "Users can create direct message or group message with
              other team members", "Users can send real time message within
              channels or direct message", "Users can share images, audio or
              text files to other users"
            </p>
          </div>
        </div>
        <DemoLinkGroup
          showcaseSlideIndex={showcaseSlideIndex}
          itemData={itemData}
        />
      </section>
    )}
    {showcaseSlideIndex === "2" && (
      <section className="showcase-content__main__detail">
        <div className="showcase-content__main__detail__desc">
          <div className="showcase-content__main__detail__desc__header">
            <h4 className="showcase-content__main__detail__desc__header__title">
              Techinical Specification
            </h4>
            <p className="showcase-content__main__detail__desc__header__text">
              Under Constructions
              {/* {itemData.techSpecDesc} */}
            </p>
          </div>
        </div>
        <DemoLinkGroup
          showcaseSlideIndex={showcaseSlideIndex}
          itemData={itemData}
        />
      </section>
    )}
  </React.Fragment>
);
