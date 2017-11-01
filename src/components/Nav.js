import React from 'react'
import $ from 'jquery';

class Projects extends React.Component {

  componentDidMount() {
    $(window)
      .scroll(function () {
        if ($(document).scrollTop() > 50) {
          $('.top-bar').addClass('shrink')
        } else {
          $('.top-bar').removeClass('shrink')
        }
      })
  }
  render() {
    return (
      <div className="top-bar">
        <nav className="nav">
          <ul>
            <li>
              <a href="#home" id="link1">HOME</a>
            </li>
            <li>
              <a href="#stuff" id="link2">SHOWCASE</a>
            </li>
            <li>
              <a href="#skillset-container" id="link3">ABOUT</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
}

export default Projects