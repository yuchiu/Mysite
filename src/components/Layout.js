import React from 'react'
import '../../assets/scss/styles.scss'

import $ from 'jquery';
import Nav from './Nav'
import Home from './Home'
import Showcase from './Showcase'
import Contact from './Contact'
import Footer from './Footer'

class Layout extends React.Component {

  render() {
    return (
      <div>
        <Nav/>
        <Home/>
        <Showcase/>
        <Contact/>
        <Footer/>
      </div>

    )
  }
}

export default Layout;
