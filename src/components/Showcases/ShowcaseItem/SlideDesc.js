import React from "react";

import DemoLinkGroup from "./DemoLinkGroup";

const loopDotItem = (list, listName) =>
  list.map((item, i) => (
    <p
      className="showcase-content__main__detail__desc__header__tech-stack__item"
      key={`techlist-${listName}-${i}`}
    >
      {i === 0 ? (
        ""
      ) : (
        <span className="showcase-content__main__detail__desc__header__tech-stack__item__dot">
          •
        </span>
      )}
      {item}
    </p>
  ));

export default ({ itemData, showcaseSlideIndex }) => (
  <React.Fragment>
    <section className="showcase-content__main__detail">
      <div className="showcase-content__main__detail__desc">
        <div className="showcase-content__main__detail__desc__header">
          <h4 className="showcase-content__main__detail__desc__header__name">
            {itemData.name}
          </h4>
          <h4 className="showcase-content__main__detail__desc__header__time">
            {itemData.time}
          </h4>
          <ul className="showcase-content__main__detail__desc__header__tech-stack">
            {itemData.language.length === 0 ? null : (
              <React.Fragment>
                <b className="showcase-content__main__detail__desc__header__tech-stack__bold">
                  Languages{" "}
                </b>
                {loopDotItem(itemData.language, "language")}
              </React.Fragment>
            )}
            {itemData.frontEndStack.length === 0 ? null : (
              <React.Fragment>
                <b className="showcase-content__main__detail__desc__header__tech-stack__bold">
                  Front-End{" "}
                </b>
                {loopDotItem(itemData.frontEndStack, "front-end")}
              </React.Fragment>
            )}
            {itemData.backEndStack.length === 0 ? null : (
              <React.Fragment>
                <b className="showcase-content__main__detail__desc__header__tech-stack__bold">
                  Back-End{" "}
                </b>
                {loopDotItem(itemData.backEndStack, "back-end")}
              </React.Fragment>
            )}
            {itemData.dataStore.length === 0 ? null : (
              <React.Fragment>
                <b className="showcase-content__main__detail__desc__header__tech-stack__bold">
                  Data Store{" "}
                </b>
                {loopDotItem(itemData.dataStore, "data-store")}
              </React.Fragment>
            )}
            {itemData.operationsStack.length === 0 ? null : (
              <React.Fragment>
                <b className="showcase-content__main__detail__desc__header__tech-stack__bold">
                  Operations{" "}
                </b>
                {loopDotItem(itemData.operationsStack, "operation")}
              </React.Fragment>
            )}
          </ul>
          <div className="showcase-content__main__detail__desc__text showcase-content__main__detail__desc__text--intro">
            <b>Descriptions</b>
            <p>{itemData.introDesc}</p>
          </div>
        </div>
      </div>
      <DemoLinkGroup
        showcaseSlideIndex={showcaseSlideIndex}
        itemData={itemData}
      />
    </section>
  </React.Fragment>
);
