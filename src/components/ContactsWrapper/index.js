import React from "react";

import "./index.scss";
import SkillsetRow from "./SkillsetRow";
import SkillsetCol from "./SkillsetCol";
import AboutMe from "./AboutMe";
import ContactsForm from "./ContactsForm";

export default () => (
  <div id="contacts-wrapper" className="contacts-wrapper">
    <div className="contacts-wrapper__upper">
      <SkillsetRow />
      <SkillsetCol />
    </div>
    <div className="contacts-wrapper__lower">
      <AboutMe />
      <ContactsForm />
    </div>
  </div>
);
