import React from 'react'
import { Row, Col } from 'react-bootstrap'
import  Illustrate from '../assets/illustrate.svg'
import Ui from '../assets/ui.svg'
import Ux from '../assets/ux.svg'
import Graphics from '../assets/graphic.svg'
import Typo from '../assets/typo.svg'
import Figma from '../assets/figma.svg'
import { Preview } from '../components/style'
import MyButton from '../components/button'
import { Link } from 'react-router-dom'
function CoursePreview() {
  return (
    <div className="design-preview">
      <Preview className="wrapper  mb-5">
        <div className="myrow">
          <div  className="mycol">
            <Link to="/explorepg/illustration">
              <img src={Illustrate} alt="" />
            </Link>
          </div>
          <div  className="mycol">
            <Link to="/explorepg/ui">
              <img src={Ui} alt="" />
            </Link>
          </div>
          <div  className="mycol">
            <Link to="/explorepg/graphics">
              <img src={Graphics} alt="" />
            </Link>
          </div>
          <div  className="mycol">
            <Link to="/explorepg/typo">
              <img src={Typo} alt="" />
            </Link>
          </div>
          <div  className="mycol">
            <Link to="/explorepg/figma">
              <img src={Figma} alt="" />
            </Link>
          </div>
          <div  className="mycol">
            <Link to="/explorepg/ux">
              <img src={Ux} alt="" />
            </Link>
          </div>
        </div>
        <div className="btn-div text-center mt-5">
          <MyButton
            path="/viewall"
            text="View all"
            clsName="button border-0 btn btn-lg"
          />
        </div>
      </Preview>
    </div>
  )
}

export default CoursePreview
