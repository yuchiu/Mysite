import React from 'react'
import Skillset from './Skillset'
import SkillsetCol from './SkillsetCol'
import AboutMe from './AboutMe'
import EmailForm from './EmailForm'
import Contacts from './Contacts'

class About extends React.Component {
  render() {
    return (
      <div id="about">
        <div className="upper-about-section" id="upper-about-section">
          <Skillset/>
          <SkillsetCol/>
        </div>
        <div className="lower-about-section" id="lower-about-section">
          <AboutMe/>
          <EmailForm/>
          <Contacts/>
        </div>
      </div>
    )
  }
}

export default About