import React from "react";

import "./index.scss";
import SkillsetRow from "./SkillsetRow";
import SkillsetCol from "./SkillsetCol";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";
import { Navbar, Footer } from "@/components/global";

const ContactPage = () => (
  <React.Fragment>
    <Navbar />
    <div className="contact-page">
      <div className="contact-page__upper">
        <SkillsetRow />
        <SkillsetCol />
      </div>
      <div className="contact-page__lower">
        <AboutMe />
        <Contacts />
      </div>
    </div>
    <Footer />
  </React.Fragment>
);
export default ContactPage;
