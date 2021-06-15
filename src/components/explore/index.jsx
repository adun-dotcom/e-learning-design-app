import React from 'react'
import MyNav from '../navbar/index'
import MyFooter from '../Footer'
import CoursePg from '../../pages/Course'
import FadeInAnimation from '../Animation'

function ExplorePg() {
  return (
    <div>
      <FadeInAnimation direction="down" delay="1">
        <MyNav />
        <CoursePg />
        <MyFooter />
      </FadeInAnimation>
    </div>
  )
}

export default ExplorePg
