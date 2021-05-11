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
      <Preview className="wrapper preview mb-5">
        <Row className="mb-5">
          <Col sm className="col">
            <Link to="/explorepg">
              <img src={Illustrate} alt="" />
            </Link>
          </Col>
          <Col sm>
            <Link to="/explorepg">
              <img src={Ui} alt="" />
            </Link>
          </Col>
          <Col sm>
            <Link to="/explorepg">
              <img src={Graphics} alt="" />
            </Link>
          </Col>
        </Row>
        <Row className="pt-2">
          <Col sm>
            <Link to="/explorepg">
              <img src={Typo} alt="" />
            </Link>
          </Col>
          <Col sm>
            <Link to="/explorepg">
              <img src={Figma} alt="" />
            </Link>
          </Col>
          <Col sm>
            <Link to="/explorepg">
              <img src={Ux} alt="" />
            </Link>
          </Col>
        </Row>
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
