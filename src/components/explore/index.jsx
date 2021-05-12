import React from 'react'
import MyNav from '../navbar/index'
import MyFooter from '../Footer'
import CoursePg from '../../pages/Course'

function ExplorePg() {
  return (
    <div>
      <MyNav/>
      <CoursePg />
      <MyFooter/>
    </div>
  )
}

export default ExplorePg
