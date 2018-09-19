import React from "react";
import PropTypes from "prop-types";

import "./AllShowcase.scss";
import { projectCards } from "@/assets/projects";
import AllShowcaseItem from "./AllShowcaseItem";

const AllShowcase = ({ category }) => (
  <div>
    <div className="all-showcase">
      <div className="all-showcase__list">
        {projectCards.map(
          (project, i) =>
            (category === project.category ||
              project.category === "fullstack" ||
              category === "all") && (
              <AllShowcaseItem key={i} category={category} project={project} />
            )
        )}
      </div>
    </div>
  </div>
);
AllShowcase.propTypes = {
  category: PropTypes.string
};

export default AllShowcase;
