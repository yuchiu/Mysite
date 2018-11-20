import React from "react";

import "./index.scss";
import DefaultProjects from "./DefaultProjects";
import AllProjects from "./AllProjects";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showAll: false,
      category: null
    };
  }

  handleClick = e => {
    const { name } = e.target;
    switch (name) {
      case "default":
        this.setState({ showAll: false, category: null });
        break;
      case "all":
        this.setState({ showAll: true, category: name });
        break;
      case "frontend":
        this.setState({ showAll: true, category: name });
        break;
      case "fullstack":
        this.setState({ showAll: true, category: name });
        break;
      case "backend":
        this.setState({ showAll: true, category: name });
        break;
      default:
        break;
    }
  };

  render() {
    const { category, showAll } = this.state;
    return (
      <React.Fragment>
        <div id="projects" className="projects-wrapper">
          <div className="category">
            <a
              className="a-tag-btn category__btn sandy-four"
              name="default"
              onClick={this.handleClick}
            >
              Default
            </a>
            <a
              className="a-tag-btn category__btn sandy-one"
              name="all"
              onClick={this.handleClick}
            >
              All
            </a>
          </div>
          {!showAll ? <DefaultProjects /> : <AllProjects category={category} />}
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
