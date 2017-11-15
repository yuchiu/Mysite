import React from 'react'

class Index extends React.Component {
  render() {
    return (
      <div id="few-showcase">
        <li className="lg-img-container" id="lg-img1">
          <a href="http://netflix-react.surge.sh/" target="_blank" className="lg-showcase-img"/>
        </li>
        <li className="lg-img-container" id="lg-img2">
          <a href="https://venues-finder.surge.sh/" target="_blank" className="lg-showcase-img"/>
        </li>
        <li className="lg-img-container" id="lg-img3">
          <a href="https://yuchiu.github.io/twitch-JSON-API/" target="_blank" className="lg-showcase-img"/>
        </li>
        <li className="lg-img-container" id="lg-img4">
          <a href="https://yuchiu.github.io/simon-game/" target="_blank" className="lg-showcase-img"/>
        </li>
        <li className="lg-img-container" id="lg-img5">
          <a href="https://yuchiu.github.io/tomato-clock/" target="_blank" className="lg-showcase-img"/>
        </li>
      </div>

    )
  }
}

export default Index;