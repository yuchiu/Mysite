import React from "react";
import PropTypes from "prop-types";

import "./index.scss";
import projectsData from "../projectsData";
import AllProjectsCard from "./AllProjectsCard";

const AllProjects = ({ category }) => (
  <div className="all-projects">
    <ul className="all-projects__list">
      {projectsData.map(
        (project, i) =>
          (category === project.category || category === "all") && (
            <AllProjectsCard key={i} category={category} project={project} />
          )
      )}
    </ul>
  </div>
);
AllProjects.propTypes = {
  category: PropTypes.string
};

export default AllProjects;
