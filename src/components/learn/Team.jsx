import React from 'react'
import Team1 from '../../assets/team-img.png'
import Team2 from '../../assets/team1.png'
import Team3 from '../../assets/team2.png'
import Team4 from '../../assets/team3.png'
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
            <img src={Team3} alt="" />
            <h4>Oluwatosin Oyegoke</h4>
            <p>Design</p>
          </div>

          <div>
            <img src={Team2} alt="" />
            <h4>Adunola Odetola</h4>
            <p>Engineering</p>
          </div>

          <div>
            <img src={Team4} alt="" />
            <h4>Abraham Enobun</h4>
            <p>Data-science</p>
          </div>
        </div>
      </div>
    </TeamSection>
  )
}

export default OurTeam
