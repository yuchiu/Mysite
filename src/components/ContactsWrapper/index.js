import React from "react";

import "./index.scss";
import Social from "./Social";
import ContactsForm from "./ContactsForm";

export default () => (
  <div id="contacts-wrapper" className="contacts-wrapper">
    <div className="contacts-wrapper__upper">
      <ContactsForm />
    </div>
    <div className="contacts-wrapper__lower">
      <Social />
    </div>
  </div>
);
