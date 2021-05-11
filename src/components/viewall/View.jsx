import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Illustrate from '../../assets/illustrate.svg'
import Ui from '../../assets/ui.svg'
import Ux from '../../assets/ux.svg'
import Figma from '../../assets/figma.svg'
import Graphics from '../../assets/graphic.svg'
import Typo from '../../assets/typo.svg'
import Design from '../../assets/design.svg'
import MockUp from '../../assets/mockup.svg'
import Photoshop from '../../assets/photoshop.svg'
import Proto from '../../assets/proto.svg'
import Research from '../../assets/research.svg'
import Sketch from '../../assets/sketch.svg'
import WireFrame from '../../assets/wireframe.svg'
import Drawing from '../../assets/drawing.svg'
import Color from '../../assets/color.svg'
import { Preview } from '../style'
import { Form, FormControl } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import MyNav from '../navbar'
import MyFooter from '../Footer'
function ViewAll() {
  return (
    <>
    <MyNav/>
      <Preview className="wrapper preview mb-5">
        <div className="mb-5">
          <h2 className="pb-5">
            Choose your design topic from over 3 thousand recommended courses{' '}
          </h2>
          <Form inline className="form mb-5 pb-5">
            <span>
              <i class="fas fa-search"></i>
            </span>
            <FormControl
              type="text"
              placeholder="What do you want to learn?"
              className=" nav-input"
            />
          </Form>
        </div>
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
        <Row className="pt-2 mb-5">
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
        <Row className="mb-5">
          <Col sm className="col">
            <Link to="/explorepg">
              <img src={Photoshop} alt="" />
            </Link>
          </Col>
          <Col sm>
            <Link to="/explorepg">
              <img src={Proto} alt="" />
            </Link>
          </Col>
          <Col sm>
            <Link to="/explorepg">
              <img src={Research} alt="" />
            </Link>
          </Col>
        </Row>
        <Row className="pt-2 mb-5">
          <Col sm>
            <Link to="/explorepg">
              <img src={WireFrame} alt="" />
            </Link>
          </Col>
          <Col sm>
            <Link to="/explorepg">
              <img src={Drawing} alt="" />
            </Link>
          </Col>
          <Col sm>
            <Link to="/explorepg">
              <img src={MockUp} alt="" />
            </Link>
          </Col>
        </Row>
        <Row className="pt-2">
          <Col sm>
            <Link to="/explorepg">
              <img src={Design} alt="" />
            </Link>
          </Col>
          <Col sm>
            <Link to="/explorepg">
              <img src={Sketch} alt="" />
            </Link>
          </Col>
          <Col sm>
            <Link to="/explorepg">
              <img src={Color} alt="" />
            </Link>
          </Col>
        </Row>
      </Preview>
      <MyFooter/>
    </>
  )
}

export default ViewAll
