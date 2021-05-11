import React from 'react'
import MyFooter from '../Footer'
import MyNav from '../navbar'
import BrowseSkill from '../../pages/Browse'
import BuildSkill from '../../pages/Build'
import CoursePreview from '../../pages/Designs'
import NewsLetter from '../../pages/News'
function LandingPg() {
  return (
    <div>
      <MyNav/>
      <BuildSkill />
      <CoursePreview />
      <BrowseSkill />
      <NewsLetter />
      <MyFooter />
    </div>
  )
}

export default LandingPg
