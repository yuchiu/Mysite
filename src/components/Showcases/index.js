import React from "react";

import "./index.scss";
import showcaseData from "./showcaseData";
import SlideDesc from "./SlideDesc";
import SlideImg from "./SlideImg";

const ShowcaseItem = ({
  itemData,
  index,
  handleChange,
  showcaseSlideIndex
}) => (
  <div id={`showcase-item-${index + 1}`} className="showcases-item-wrapper">
    <div className="showcase-content">
      <div className="showcase-content__main">
        <SlideImg
          itemData={itemData}
          index={index}
          showcaseSlideIndex={showcaseSlideIndex}
        />
        <SlideDesc
          index={index}
          itemData={itemData}
          handleChange={handleChange}
          showcaseSlideIndex={showcaseSlideIndex}
        />
      </div>
    </div>
  </div>
);

class Showcases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showcaseListSlideStatus: {
        showcaseItem0: "0",
        showcaseItem1: "0",
        showcaseItem2: "0"
      }
    };
  }

  handleChange = e => {
    console.log(e.target.value);
    const { showcaseListSlideStatus } = this.state;
    const field = e.target.name;
    showcaseListSlideStatus[field] = e.target.value;
    this.setState({
      showcaseListSlideStatus
    });
  };

  // get the showcaseListSlideStatus showcaseItem accordingly
  getShowcaseSlideIndex = index => {
    const { showcaseListSlideStatus } = this.state;
    const fieldNameIndex = index.toString();
    const showcaseListSlideStatusFieldName = `showcaseItem${fieldNameIndex}`;
    return showcaseListSlideStatus[showcaseListSlideStatusFieldName];
  };

  render() {
    return (
      <div id="showcases-wrapper" className="showcases-wrapper">
        {showcaseData.map((itemData, index) => (
          <ShowcaseItem
            key={`showcase-index-${index}`}
            handleChange={this.handleChange}
            showcaseSlideIndex={this.getShowcaseSlideIndex(index)}
            index={index}
            itemData={itemData}
          />
        ))}
      </div>
    );
  }
}

export default Showcases;
