import React from 'react'
import Skillset from './Skillset'
import SkillsetCol from './SkillsetCol'
import AboutMe from './AboutMe'
import Contacts from './Contacts'

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <div id="upper-about-section">
          <Skillset/>
          <SkillsetCol/>
        </div>
        <div id="lower-about-section">
          <AboutMe/>
          <Contacts/>
        </div>
      </div>
    )
  }
}

export default About