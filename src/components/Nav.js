import React from 'react'
import $ from 'jquery';

class Projects extends React.Component {

  componentDidMount() {

    $('a').click(function (event) {
      if (this.hash !== '') {

        event.preventDefault();
        var hash = this.hash;

        $('html, body').animate({
          scrollTop: $(hash)
            .offset()
            .top
        }, 1000, function () {
          window.location.hash = hash;
        })

      }
    })
  }
  render() {
    return (
      <div>
        <div className="top-bar scrollNav">
          <div className="nav">
            <ul>
              <li>
                <a href="#home" id="link1">HOME</a>
              </li>
              <li>
                <a href="#stuff" id="link2">SHOWCASE</a>
              </li>
              <li>
                <a href="#contact" id="link3">CONTACT</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Projects