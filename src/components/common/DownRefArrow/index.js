import React from "react";

import "./index.scss";

export default ({ idhref, aTagClass, iTagClass, dark }) => (
  <React.Fragment>
    <a href={idhref} aria-hidden="true" className={aTagClass}>
      {dark ? (
        <i
          className={`arrow-icon arrow-icon--dark fa fa-angle-double-down fa-4x ${iTagClass}`}
        />
      ) : (
        <i
          className={`arrow-icon fa fa-angle-double-down fa-4x ${iTagClass}`}
        />
      )}
    </a>
  </React.Fragment>
);
