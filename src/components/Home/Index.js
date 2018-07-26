import React from "react";
import Landing from "./Landing";
import { TransparentFooter, TransparentNavbar } from "../global";

const Home = () => (
  <React.Fragment>
    <TransparentNavbar />
    <Landing />
    <TransparentFooter />
  </React.Fragment>
);

export default Home;
