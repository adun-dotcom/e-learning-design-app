import React from 'react'
import Illustrate from '../assets/illustrate.svg'
import Ui from '../assets/ui.svg'
import Ux from '../assets/ux.svg'
import Figma from '../assets/figma.svg'
import Graphics from '../assets/graphic.svg'
import Typo from '../assets/typo.svg'
import Design from '../assets/design.svg'
import MockUp from '../assets/mockup.svg'
import Photoshop from '../assets/photoshop.svg'
import Proto from '../assets/proto.svg'
import Research from '../assets/research.svg'
import Sketch from '../assets/sketch.svg'
import WireFrame from '../assets/wireframe.svg'
import Drawing from '../assets/drawing.svg'
import Color from '../assets/color.svg'

function CourseImage() {
  // console.log(window.location.pathname)()
  const pathArray = window.location.pathname.split('/')
  const pathName = pathArray[pathArray.length - 1]
  console.log(pathName)
  const getCourseImg = ()=>{
     const images = {
         'illustration': Illustrate,
         'sketch': Sketch,
         'ui': Ui,
         'ux':Ux,
         'figma':Figma,
         'graphics':Graphics,
         'typo':Typo,
         'design': Design,
         'mockup':MockUp,
         'adobe-xd':Photoshop,
         'proto':Proto,
         'research':Research,
         'wireframe':WireFrame,
         'drawing':Drawing,
         'color':Color,
     }
     return images[pathName]
  }

  return (
      <img src={getCourseImg()} alt="" />
  )
}

export default CourseImage
