import React from "react";

import "./index.scss";
import showcaseData from "./showcaseData";
import ShowcaseItem from "./ShowcaseItem";

class Showcases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showcaseListSlideStatus: {
        showcaseItem0: "0",
        showcaseItem1: "0"
      }
    };
  }

  handleChange = e => {
    const { showcaseListSlideStatus } = this.state;
    const field = e.target.name;
    showcaseListSlideStatus[field] = e.target.value;

    this.setState({
      showcaseListSlideStatus
    });
  };

  handleSlideLeft = e => {
    const { showcaseListSlideStatus } = this.state;
    const field = e.target.name;
    if (showcaseListSlideStatus[field] === "1") {
      showcaseListSlideStatus[field] = "0";
      this.setState({
        showcaseListSlideStatus
      });
      return;
    }
    if (showcaseListSlideStatus[field] === "2") {
      showcaseListSlideStatus[field] = "1";
      this.setState({
        showcaseListSlideStatus
      });
    }
  };

  handleSlideRight = e => {
    const { showcaseListSlideStatus } = this.state;
    const field = e.target.name;
    if (showcaseListSlideStatus[field] === "0") {
      showcaseListSlideStatus[field] = "1";
      this.setState({
        showcaseListSlideStatus
      });
      return;
    }
    if (showcaseListSlideStatus[field] === "1") {
      showcaseListSlideStatus[field] = "2";
      this.setState({
        showcaseListSlideStatus
      });
    }
  };

  // get the showcaseListSlideStatus showcaseItem accordingly
  getShowcaseSlideIndex = index => {
    const { showcaseListSlideStatus } = this.state;
    const fieldNameIndex = index.toString();
    const showcaseListSlideStatusFieldName = `showcaseItem${fieldNameIndex}`;
    return showcaseListSlideStatus[showcaseListSlideStatusFieldName];
  };

  render() {
    const { showcaseListSlideStatus } = this.state;
    return (
      <div id="showcases-wrapper" className="showcases-wrapper">
        {showcaseData.map((itemData, index) => (
          <ShowcaseItem
            key={`showcase-index-${index}`}
            index={index}
            itemData={itemData}
            handleChange={this.handleChange}
            showcaseSlideIndex={this.getShowcaseSlideIndex(index)}
            handleSlideLeft={this.handleSlideLeft}
            handleSlideRight={this.handleSlideRight}
          />
        ))}
      </div>
    );
  }
}

export default Showcases;
