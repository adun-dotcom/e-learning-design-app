import React, { useEffect, useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import Illustrate from '../assets/illustrate.svg'
import { CourseSection } from '../components/style'
import StyledCheckbox from '../components/Checkbox'
import Cards from './CourseCard'
import udemy from '../assets/udemy.png'
import cousera from '../assets/cousera.png'
import greenBx from '../assets/green-bx.png'
import { instance } from '../redux/api/config'
function CoursePg() {
  // console.log(window.location.pathname)
  const pathArray = window.location.pathname.split('/')
  const pathName = pathArray[pathArray.length - 1]
  console.log(pathName)
  // console.log(pathName)
  const [getCourses, setGetCourses] = useState([])
  const getData = async () => {
    try {
      const result = await instance.get('/courses', {
        headers: {
          'x-access-token': JSON.parse(localStorage.getItem('profile')).token,
        },
      })
      console.log(result.data)
      const category = result.data.courses.filter((type) => {
        return type.Category === pathName
      })
      setGetCourses(category)
      // console.log(category, 'category')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])
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
          <h4>Top tutorial courses</h4>
          {getCourses.map((course) => (
            <div>
              <Cards
                title={course.Course}
                name="Adunola Odetola"
                href={course['Course Link']}
                link="udemy.com"
                img={udemy}
                cost={course['Course Cost']}
                type={course['Student Type']}
              >
                <span>
                  <i class="fas fa-bookmark"></i>
                  Saved
                </span>
              </Cards>
            </div>
          ))}
        </Col>
      </Row>
    </CourseSection>
  )
}

export default CoursePg
