import React from 'react'
import Skillset from './Skillset'
import SkillsetCol from './SkillsetCol'
import EmailForm from './EmailForm'
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
          <Contacts/>
          <EmailForm/>
        </div>
      </div>
    )
  }
}

export default About