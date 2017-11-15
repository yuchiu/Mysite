import React from 'react'
import AllShowcase from './AllShowcase'
import FewShowcase from './FewShowcase'
class Index extends React.Component {
  constructor() {
    super()
    this.state = {
      showAll: false,
      btnText: "Show All Projects"
    }
  }
  handleClick(e) {
    let text
    if (this.state.btnText=="Show All Projects") {
      text = "Show Few Projects"
    } else {
      text = "Show All Projects"
    }
    console.log(text)
    this.setState({
      showAll: !this.state.showAll,
      btnText: text
    })
  }
  render() {
    return (
      <div id="showcase-container">
        <button
          id="showcase-toggle-btn"
          onClick={this
          .handleClick
          .bind(this)}>{this.state.btnText}</button>
        <h1 id="showcase-title">Showcase</h1>
        {!this.state.showAll && <FewShowcase/>}
        {this.state.showAll && <AllShowcase/>}
      </div>

    )
  }
}

export default Index;