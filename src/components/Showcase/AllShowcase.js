import React from "react";
import PropTypes from "prop-types";

import { projects } from "../../data";
import Project from "./Project";

class AllShowcase extends React.Component {
  render() {
    return (
      <div>
        <div id="all-showcase">
          <div className="content">
            {projects.map(
              (project, i) =>
                (this.props.category === project.category ||
                  project.category === "fullstack" ||
                  this.props.category === "all") && (
                  <Project
                    key={i}
                    category={this.props.category}
                    project={project}
                  />
                )
            )}
          </div>
        </div>
      </div>
    );
  }
}

AllShowcase.propTypes = {
  category: PropTypes.string
};

export default AllShowcase;
