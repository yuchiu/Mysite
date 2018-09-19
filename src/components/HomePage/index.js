import React from "react";

import "./index.scss";
import Landing from "./Landing";
import { TransparentFooter, TransparentNavbar } from "@/components/global";

const HomePage = () => (
  <React.Fragment>
    <TransparentNavbar />
    <Landing />
    <TransparentFooter />
  </React.Fragment>
);

export default HomePage;
