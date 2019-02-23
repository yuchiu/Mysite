import React from "react";

import "./TechStack.scss";

const loopDotItem = (list, listName) =>
  list.map((item, i) => (
    <p
      className="showcase-content-tech-stack__tech-stack__item"
      key={`techlist-${listName}-${i}`}
    >
      {i === 0 ? (
        ""
      ) : (
        <span className="showcase-content-tech-stack__tech-stack__item__dot">
          ·
        </span>
      )}
      {item}
    </p>
  ));

export default ({ itemData }) => (
  <div className="showcase-content-tech-stack">
    <h4 className="showcase-content-tech-stack__name">{itemData.name}</h4>
    <h4 className="showcase-content-tech-stack__time">{itemData.time}</h4>
    <div className="showcase-content-detail__desc__text showcase-content-detail__desc__text--intro">
      <span>{itemData.introDesc}</span>
    </div>
    <ul className="showcase-content-tech-stack__tech-stack">
      {itemData.language.length === 0 ? null : (
        <React.Fragment>
          <span className="showcase-content-tech-stack__tech-stack__title">
            Languages{" "}
          </span>
          {loopDotItem(itemData.language, "language")}
        </React.Fragment>
      )}
      {itemData.frontEndStack.length === 0 ? null : (
        <React.Fragment>
          <span className="showcase-content-tech-stack__tech-stack__title">
            Front-End{" "}
          </span>
          {loopDotItem(itemData.frontEndStack, "front-end")}
        </React.Fragment>
      )}
      {itemData.backEndStack.length === 0 ? null : (
        <React.Fragment>
          <span className="showcase-content-tech-stack__tech-stack__title">
            Back-End{" "}
          </span>
          {loopDotItem(itemData.backEndStack, "back-end")}
        </React.Fragment>
      )}
      {itemData.dataStore.length === 0 ? null : (
        <React.Fragment>
          <span className="showcase-content-tech-stack__tech-stack__title">
            Data Store{" "}
          </span>
          {loopDotItem(itemData.dataStore, "data-store")}
        </React.Fragment>
      )}
      {itemData.operationsStack.length === 0 ? null : (
        <React.Fragment>
          <span className="showcase-content-tech-stack__tech-stack__title">
            Operations{" "}
          </span>
          {loopDotItem(itemData.operationsStack, "operation")}
        </React.Fragment>
      )}
    </ul>
  </div>
);
