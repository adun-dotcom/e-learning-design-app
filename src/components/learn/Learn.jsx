import React from 'react'
import Human1 from '../../assets/human1.png'
import Human2 from '../../assets/human2.png'
import Human3 from '../../assets/human3.png'
import Human4 from '../../assets/human4.png'
import Human5 from '../../assets/human5.png'

import { LearnSection } from '../style'
function LearnMore() {
  return (
    <LearnSection className="wrapper">
      <div className="container text-center">
        <h1>Your one stop online learning platform for designers</h1>
        <p>
          We aggregate courses from many providers to make it easy to find the
          best design courses on almost all design subjects
        </p>
      </div>
      <div className="learn-people">
        <img src={Human1} className="stand-alone" alt="" />
        <div className="learn-img">
          <img src={Human2} alt="" />
          <img src={Human3} alt="" />
          <img src={Human4} alt="" />
        </div>

        <img className="stand-alone" src={Human5} alt="" />
      </div>
      <div className="learn-img hidden">
        <img src={Human2} alt="" />
        <img src={Human3} alt="" />
        <img src={Human4} alt="" />
      </div>
    </LearnSection>
  )
}

export default LearnMore
