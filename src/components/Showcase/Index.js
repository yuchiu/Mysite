import React from "react";
import AllShowcase from "./AllShowcase";
import DefaultShowcase from "./DefaultShowcase";

class Showcase extends React.Component {
  constructor() {
    super();
    this.state = {
      showAll: false,
      category: null
    };
  }

  handleClick(e) {
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
      case "backend":
        this.setState({ showAll: true, category: name });
        break;
      default:
        break;
    }
  }

  render() {
    return (
      <div id="showcase-container">
        <h1 id="showcase-title">Showcase</h1>
        <div id="category-btn-container">
          <a
            className="a-tag-btn sandy-four"
            name="default"
            onClick={this.handleClick.bind(this)}
          >
            Default
          </a>
          <a
            className="a-tag-btn sandy-one"
            name="all"
            onClick={this.handleClick.bind(this)}
          >
            All
          </a>
          <a
            className="a-tag-btn sandy-three"
            name="frontend"
            onClick={this.handleClick.bind(this)}
          >
            Front-End
          </a>
          <a
            className="a-tag-btn sandy-two"
            name="backend"
            onClick={this.handleClick.bind(this)}
          >
            Back-End
          </a>
        </div>
        {!this.state.showAll && <DefaultShowcase />}
        {this.state.showAll &&
          this.state.category && <AllShowcase category={this.state.category} />}
      </div>
    );
  }
}

export default Showcase;
