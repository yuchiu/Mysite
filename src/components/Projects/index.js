import React from "react";

import "./index.scss";
import { DownRefArrow } from "../common";
import ProjectList from "./ProjectList";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "all"
    };
  }

  handleClick = e => {
    const { name } = e.target;
    switch (name) {
      case "all":
        this.setState({ category: name });
        break;
      case "frontend":
        this.setState({ category: name });
        break;
      case "fullstack":
        this.setState({ category: name });
        break;
      case "backend":
        this.setState({ category: name });
        break;
      default:
        break;
    }
  };

  render() {
    const { category } = this.state;
    return (
      <React.Fragment>
        <div id="projects-wrapper" className="projects-wrapper">
          <div className="category">
            <a
              className="a-tag-btn category__btn sandy-one"
              name="all"
              onClick={this.handleClick}
            >
              FrontEnd Projects
            </a>
          </div>
          <ProjectList category={category} />
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
