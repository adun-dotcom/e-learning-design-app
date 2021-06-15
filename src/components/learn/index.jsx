import React from 'react'
import { Nav } from 'react-bootstrap'
import MyFooter from '../Footer'
import MyNav from '../navbar'
import LearnMore from './Learn'
import FadeInAnimation from '../Animation'
import OurTeam from './Team'
function LearnPg() {
    return (
      <>
        <FadeInAnimation direction="down" delay={1}>
          <MyNav active="/learn" />
          <LearnMore />
          <OurTeam />

          <MyFooter />
        </FadeInAnimation>
      </>
    )
}

export default LearnPg