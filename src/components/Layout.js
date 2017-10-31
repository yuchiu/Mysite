import React from 'react'
import '../../assets/scss/styles.scss'

import $ from 'jquery';
import Nav from './Nav'
import Home from './Home'
import Showcase from './Showcase'
import About from './About'
import Footer from './Footer'

class Layout extends React.Component {

  componentDidMount() {

    $('a')
      .click(function (event) {
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
        <Nav/>
        <Home/>
        <Showcase/>
        <About/>
        <Footer/>
      </div>

    )
  }
}

export default Layout;
