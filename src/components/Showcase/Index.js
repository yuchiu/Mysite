import React from 'react'
import AllShowcase from './AllShowcase'
import DefaultShowcase from './DefaultShowcase'
class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      showAll: false,
      category: ""
    }
  }
  handleClick(e) {
    const name = e.target.name
    switch (name) {
      case "default":
        this.setState({showAll: false, category: ""})
        break;
      case "all":
        this.setState({showAll: true, category: name})
        break;
      case "vanilla":
        this.setState({showAll: true, category: name})
        break;
      case "frontend":
        this.setState({showAll: true, category: name})
        break;
      case "backend":
        this.setState({showAll: true, category: name})
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
            className="a-tag-btn victoria-two"
            name="default"
            onClick={this
            .handleClick
            .bind(this)}>Default</a>
          <a
            className="a-tag-btn victoria-two"
            name="all"
            onClick={this
            .handleClick
            .bind(this)}>All</a>
          <a
            className="a-tag-btn victoria-two"
            name="vanilla"
            onClick={this
            .handleClick
            .bind(this)}>CSS ∙ JS ∙ jQuery</a>
          <a
            className="a-tag-btn victoria-two"
            name="frontend"
            onClick={this
            .handleClick
            .bind(this)}>Front-End Framework</a>
          <a
            className="a-tag-btn victoria-two"
            name="backend"
            onClick={this
            .handleClick
            .bind(this)}>Back-End</a>
        </div>
        {!this.state.showAll && <DefaultShowcase/>}
        {this.state.showAll && <AllShowcase category={this.state.category}/>}
      </div>

    )
  }
}

export default Index;