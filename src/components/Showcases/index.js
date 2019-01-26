import React from "react";

import "./index.scss";
import showcaseData from "./showcaseData";
import ShowcaseItem from "./ShowcaseItem";

class Showcases extends React.Component {
  render() {
    return (
      <div id="showcases-wrapper" className="showcases-wrapper">
        {showcaseData.map((itemData, index) => (
          <ShowcaseItem
            key={`showcase-index-${index}`}
            index={index}
            itemData={itemData}
          />
        ))}
      </div>
    );
  }
}

export default Showcases;
