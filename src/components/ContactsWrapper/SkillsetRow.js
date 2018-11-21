import React from "react";

import "./Skillset.scss";
import {
  reactLogo,
  redisLogo,
  expressLogo,
  tensorflowLogo,
  nodejsLogo,
  graphqlLogo,
  reduxLogo,
  mongoDBLogo,
  dockerLogo
} from "./iconsSVG";

export default () => (
  <section className="icons-row-section">
    <h3 className="icons-section-title">
      My Current Favorite Programming Tools
    </h3>
    <div className="icons">
      <div className="icons__item">
        {reactLogo}
        <span className="icons__item__name ">ReactJS</span>
      </div>
      <div className="icons__item ">
        {reduxLogo}
        <span className="icons__item__name">Redux</span>
      </div>
      <div className="icons__item">
        {nodejsLogo}
        <span className="icons__item__name">NodeJS</span>
      </div>
      <div className="icons__item">
        {expressLogo}
        <span className="icons__item__name">ExpressJS</span>
      </div>
      <div className="icons__item ">
        {graphqlLogo}
        <span className="icons__item__name ">GraphQL</span>
      </div>
      <div className="icons__item ">
        {mongoDBLogo}
        <span className="icons__item__name">MongoDB</span>
      </div>
      <div className="icons__item ">
        {redisLogo}
        <span className="icons__item__name">Redis</span>
      </div>
      <div className="icons__item  ">
        {tensorflowLogo}
        <span className="icons__item__name">Tensorflow</span>
      </div>
      <div className="icons__item ">
        {dockerLogo}
        <span className="icons__item__name">Docker</span>
      </div>
    </div>
  </section>
);
