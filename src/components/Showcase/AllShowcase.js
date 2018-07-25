import React from "react";
import $ from "jquery";
import { projects } from "../../data";

class AllShowcase extends React.Component {
  componentDidMount() {
    this.showCategory();
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillUpdate() {
    this.showCategory();
  }

  showCategory() {
    $(".all").hide("");
    setTimeout(() => {
      $(`.${this.props.category}`).show("");
    }, 700);
  }

  render() {
    return (
      <div>
        <div id="all-showcase">
          <div className="content">
            {projects.map(project => (
              <div
                key={project.id}
                className={`thumbnail all ${project.category}`}
              >
                <div
                  className="pic"
                  style={{ backgroundImage: `url(${project.thumbnailImg})` }}
                />
                <div className="desc">
                  <h2>{project.name}</h2>
                  <p>
                    {project.techStack.map((tech, i) => (
                      <div style={{ display: "inline" }} key={i}>
                        {" ∙ "}
                        {tech}
                      </div>
                    ))}
                  </p>
                  <a
                    href={`${project.githubLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="a-tag-btn sandy-two"
                  >
                    <i className="fa fa-external-link" />Github
                  </a>
                  <a
                    href={`${project.demoLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="a-tag-btn sandy-two"
                  >
                    <i className="fa fa-external-link" />View
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default AllShowcase;

/* <div id="all-showcase">
<div className="content">
  <div className="thumbnail all frontend">
    <div className="pic" id="pic1" />
    <div className="desc">
      <h2>Netflix Clone</h2>
      <p>ReactJS ∙ Redux ∙ Scss ∙ tmdb API</p>
      <a
        href="https://github.com/yuchiu/React-Redux-Netflix-Clone"
        target="_blank"
        rel="noopener noreferrer"
        className="a-tag-btn sandy-two"
      >
        <i className="fa fa-external-link" />Github
      </a>
      <a
        href="http://netflix-react.surge.sh/"
        target="_blank"
        rel="noopener noreferrer"
        className="a-tag-btn sandy-two"
      >
        <i className="fa fa-external-link" />View
      </a>
    </div>
  </div>
</div> */
