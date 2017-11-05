import React from 'react'
import {
  reactLogo,
  cssLogo,
  htmlLogo,
  javascriptLogo,
  nodejsLogo,
  reactRouterLogo,
  reduxLogo,
  webpackLogo,
  babelLogo
} from '../../../assets/icons/index'
class SkillsetCol extends React.Component {
  render() {
    return (
      <section className="icons-col-section">
       <div><h3>My Current Favorite Stack</h3></div>
        <div className="icon-container">
          <div className="col">
            <div className="tech-icon react">
              {reactLogo}
              <span>React</span>
            </div>
            <div className="tech-icon css">
              {cssLogo}
              <span>CSS3</span>
            </div>
            <div className="tech-icon html">
              {htmlLogo}
              <span>HTML5</span>
            </div>
          </div>
          <div className="col">
            <div className="tech-icon javascript">
              {javascriptLogo}
              <span>JavaScript</span>
            </div>
            <div className="tech-icon nodejs">
              {nodejsLogo}
              <span>Node.js</span>
            </div>
            <div className="tech-icon react-router">
              {reactRouterLogo}
              <span>React Router</span>
            </div>
          </div>
          <div className="col">
            <div className="tech-icon redux">
              {reduxLogo}
              <span>Redux</span>
            </div>
            <div className="tech-icon webpack">
              {webpackLogo}
              <span>Webpack</span>
            </div>
            <div className="tech-icon babel">
              {babelLogo}
              <span>Babel</span>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SkillsetCol