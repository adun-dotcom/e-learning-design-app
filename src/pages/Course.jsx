import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { CourseSection } from '../components/style'
import StyledCheckbox from '../components/Checkbox'
import Cards from './CourseCard'
import { instance } from '../redux/api/config'
import CourseImage from './CourseImage'

import Aos from 'aos'
import 'aos/dist/aos.css'
import ReactPaginate from 'react-paginate'
function CoursePg() {
  // console.log(window.location.pathname)
  const pathArray = window.location.pathname.split('/')
  const pathName = pathArray[pathArray.length - 1]
  // console.log(pathName)
  
  const [getCourses, setGetCourses] = useState([])
  const [pageNumber, setPageNumber] = useState(0)


  const coursePerPage = 4
  const pageVisited = pageNumber * coursePerPage

  const displayCourses = getCourses.slice(pageVisited, pageVisited + coursePerPage)
                                  .map(course=>{
    return (
      <div data-aos="fade-up">
        <Cards
          title={course.Course}
          name={course['Author ']}
          href={course['Course Link']}
          cost={course['Course Cost']}
          type={course['Student Type']}
        >
          
          <span>
            <i class="fas fa-bookmark"></i>
            Saved
          </span>
        </Cards>
      </div>
    )

  })
  const pageCount = Math.ceil(getCourses.length / coursePerPage)
  const pageChange = ({selected})=>{
    setPageNumber(selected)
  }
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
      
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])
    useEffect(() => {
      Aos.init({ duration: 2000 })
    }, [])
  return (
    <CourseSection className="wrapper">
      <div className="course-img">
        <CourseImage />
      </div>

      <Row className="course-wrap ">
        <Col className="search-filter" xs={6} lg={3}>
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
          <div className="tutorial-flex">
            <a href="/viewall">&#8592;</a>
            <h4>Top tutorial courses</h4>
          </div>

          {displayCourses}
          
            <ReactPaginate
              pageCount={pageCount}
              onPageChange={pageChange}
              previousLabel="&#8249;"
              nextLabel="&#8250;"
              containerClassName={'pagination'}
              previousLinkClassName={'previousbtn'}
              nextLinkClassName={'nextbtn'}
              activeClassName={'activebtn'}
            />
         
        </Col>
      </Row>
    </CourseSection>
  )
}

export default CoursePg
