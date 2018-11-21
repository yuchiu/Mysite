import React from "react";

import "./index.scss";
import SkillsetRow from "./SkillsetRow";
import SkillsetCol from "./SkillsetCol";
import AboutMe from "./AboutMe";
import Contacts from "./Contacts";

const ContactsWrapper = () => (
  <div id="contacts-wrapper" className="contacts-wrapper">
    <div className="contacts-wrapper__upper">
      <SkillsetRow />
      <SkillsetCol />
    </div>
    <div className="contacts-wrapper__lower">
      <AboutMe />
      <Contacts />
    </div>
  </div>
);
export default ContactsWrapper;
