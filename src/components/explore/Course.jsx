import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import Illustrate from '../../assets/illustrate.svg'
import { CourseSection } from '../style'
import StyledCheckbox from '../Checkbox'
import Cards from './CourseCard'
import udemy from '../../assets/udemy.png'
import cousera from '../../assets/cousera.png'
import greenBx from '../../assets/green-bx.png'

function CoursePg() {
  return (
    <CourseSection className="wrapper">
      <Card className="course-img">
        <Card.Img variant="top" src={Illustrate} />
      </Card>
      {/* course filter section */}

      <Row className="course-wrap ">
        <Col className="search-filter" xs={6} md={3}>
          <div>
            <p>Search filter</p>
            <hr />
            <p>Course type</p>
            <div className="checkbox-wrapper">
              <StyledCheckbox label="Free" />
              <StyledCheckbox label="Paid" />
            </div>
          </div>
          <p>Level</p>
          <div className="checkbox-wrapper">
            <StyledCheckbox label="Beginner" />
            <StyledCheckbox label="Intermediate" />
            <StyledCheckbox label="Advanced" />
          </div>
        </Col>
        <Col className="tutorials" xs={12} md={8}>
          <h4>Top illustrator tutorials</h4>
          <div>
            <Cards
              title="Illustration"
              name="Adunola Odetola"
              link="udemy.com"
              img={udemy}
            >
              <span>
                <i class="fas fa-bookmark"></i>
                Saved
              </span>
            </Cards>
            <Cards
              title="Illustration"
              name="Adunola Odetola"
              link="cousera.com"
              img={cousera}
            >
              <span>
                <i class="fas fa-bookmark"></i>
                Saved
              </span>
            </Cards>
            <Cards
              title="Illustration"
              name="Adunola Odetola"
              link="udemy.com"
              img={greenBx}
            >
              <span>
                <i class="far fa-bookmark"></i>
                Save
              </span>
            </Cards>
            <Cards
              title="Illustration"
              name="Adunola Odetola"
              link="udemy.com"
              img={greenBx}
            >
              <span>
                <i class="far fa-bookmark"></i>
                Save
              </span>
            </Cards>
          </div>
        </Col>
      </Row>
    </CourseSection>
  )
}

export default CoursePg
