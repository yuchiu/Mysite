import React from "react";
import "../data/scss/index.scss";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./home";
import Showcase from "./showcase";
import Contact from "./contact";

const Router = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/showcase" exact component={Showcase} />
      <Route path="/contact" exact component={Contact} />
    </Switch>
  </HashRouter>
);
export default Router;
