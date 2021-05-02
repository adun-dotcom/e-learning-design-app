import React from 'react'
import Team1 from '../../assets/team-img.png'

import { TeamSection } from '../style'
function OurTeam() {
  return (
    <TeamSection className="wrapper">
      <div className="text-center">
        <h2>Our team</h2>
        <div className="team-images">
          <div>
            <img src={Team1} alt="" />
            <h4>Uche Chineke</h4>
            <p>Design</p>
          </div>

          <div>
            <img src={Team1} alt="" />
            <h4>Uche Chineke</h4>
            <p>Design</p>
          </div>

          <div>
            <img src={Team1} alt="" />
            <h4>Uche Chineke</h4>
            <p>Design</p>
          </div>

          <div>
            <img src={Team1} alt="" />
            <h4>Uche Chineke</h4>
            <p>Design</p>
          </div>
        </div>
      </div>
    </TeamSection>
  )
}

export default OurTeam
