import React from "react";

import "./index.scss";
import AllShowcase from "./AllShowcase";
import DefaultShowcase from "./DefaultShowcase";
import { Navbar, Footer } from "@/components/global";

class ShowcasePage extends React.Component {
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
        <Navbar />
        <div className="showcase-page">
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
            <a
              className="a-tag-btn category__btn sandy-three"
              name="frontend"
              onClick={this.handleClick}
            >
              Front-End
            </a>
            <a
              className="a-tag-btn category__btn sandy-two"
              name="backend"
              onClick={this.handleClick}
            >
              Back-End
            </a>
            <a
              className="a-tag-btn category__btn sandy-four"
              name="fullstack"
              onClick={this.handleClick}
            >
              Full-Stack
            </a>
          </div>
          {!showAll && <DefaultShowcase />}
          {showAll && category && <AllShowcase category={category} />}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default ShowcasePage;
