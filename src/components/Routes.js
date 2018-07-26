import React from "react";
import "../../assets/scss/styles.scss";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./home";
import Showcase from "./showcase";
import Contact from "./contact";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/showcase" exact component={Showcase} />
      <Route path="/contact" exact component={Contact} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
