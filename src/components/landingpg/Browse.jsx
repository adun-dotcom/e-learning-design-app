import React from 'react'
import ImageGirl from '../../assets/image-girl.png'
import Icons from '../../assets/icons.png'
import Graph from '../../assets/graph.png'
import { BrowseSection } from '../style'
import { Row, Col } from 'react-bootstrap'
function BrowseSkill() {
  return (
    <BrowseSection className="wrapper mb-5">
      <Row className="d-flex align-items-center browse-row">
        <Col>
          <div className="browse-text">
            <h2>Browse amazing resources for your projects</h2>
            <p>Get amazing premium or courses for your design projects.</p>
          </div>
        </Col>

        <Col>
          <div className="browse-images">
            <div className="preview-div">
              <p className="preview-text">Images</p>
              <img src={ImageGirl} alt="" />
            </div>
            <div className="browse-img-div">
              <div className="preview-div">
                <p className="preview-text">Icons</p>
                <img src={Icons} alt="" />
              </div>
              <div className="preview-div">
                <p className="preview-text">Illustrations</p>
                <img src={Graph} alt="" />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </BrowseSection>
  )
}

export default BrowseSkill
