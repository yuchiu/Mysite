import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import "./index.scss";
import HomePage from "./HomePage";
import ShowcasePage from "./ShowcasePage";
import ContactPage from "./ContactPage";

const Router = () => (
  <HashRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/showcase" exact component={ShowcasePage} />
      <Route path="/contact" exact component={ContactPage} />
    </Switch>
  </HashRouter>
);
export default Router;
