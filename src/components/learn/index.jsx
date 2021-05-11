import React from 'react'
import { Nav } from 'react-bootstrap'
import MyFooter from '../Footer'
import MyNav from '../navbar'
import LearnMore from './Learn'

import OurTeam from './Team'
function LearnPg() {
    return (
      <>
     <MyNav/>
        <LearnMore />
        <OurTeam />
        <MyFooter/>
      </>
    )
}

export default LearnPg