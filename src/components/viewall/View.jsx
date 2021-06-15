import React, { useEffect } from 'react'
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
import { Link } from 'react-router-dom'
import MyNav from '../navbar'
import MyFooter from '../Footer'
import Aos from 'aos'
import 'aos/dist/aos.css'
function ViewAll() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <>
      <MyNav />

      <Preview className="wrapper preview mb-5">
        <div className="mb-5">
          <h2 className="pb-5" data-aos="fade-right">
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

        <Row className="row" data-aos="fade-up">
          <div sm className="col" className="col">
            <Link to="/explorepg/illustration">
              <img src={Illustrate} alt="" />
            </Link>
          </div>
          <div sm className="col">
            <Link to="/explorepg/ui">
              <img src={Ui} alt="" />
            </Link>
          </div>
          <div sm className="col">
            <Link to="/explorepg/graphics">
              <img src={Graphics} alt="" />
            </Link>
          </div>

          <div sm className="col" data-aos="fade-up">
            <Link to="/explorepg/typo">
              <img src={Typo} alt="" />
            </Link>
          </div>
          <div sm className="col" data-aos="fade-up">
            <Link to="/explorepg/figma">
              <img src={Figma} alt="" />
            </Link>
          </div>
          <div sm className="col" data-aos="fade-up">
            <Link to="/explorepg/ux">
              <img src={Ux} alt="" />
            </Link>
          </div>

          <div sm className="col" data-aos="fade-up">
            <Link to="/explorepg/adobe-xd">
              <img src={Photoshop} alt="" />
            </Link>
          </div>
          <div sm className="col" data-aos="fade-up">
            <Link to="/explorepg/proto">
              <img src={Proto} alt="" />
            </Link>
          </div>
          <div sm className="col" data-aos="fade-up">
            <Link to="/explorepg/research">
              <img src={Research} alt="" />
            </Link>
          </div>

          <div sm className="col" data-aos="fade-up">
            <Link to="/explorepg/wireframe">
              <img src={WireFrame} alt="" />
            </Link>
          </div>
          <div sm className="col" data-aos="fade-up">
            <Link to="/explorepg/drawing">
              <img src={Drawing} alt="" />
            </Link>
          </div>
          <div sm className="col" data-aos="fade-up">
            <Link to="/explorepg/mockup">
              <img src={MockUp} alt="" />
            </Link>
          </div>

          <div sm className="col" data-aos="fade-up">
            <Link to="/explorepg/design">
              <img src={Design} alt="" />
            </Link>
          </div>
          <div sm className="col" data-aos="fade-up">
            <Link to="/explorepg/sketch">
              <img src={Sketch} alt="" />
            </Link>
          </div>
          <div sm className="col" data-aos="fade-up">
            <Link to="/explorepg/color">
              <img src={Color} alt="" />
            </Link>
          </div>
        </Row>
      </Preview>

      <MyFooter />
    </>
  )
}

export default ViewAll
