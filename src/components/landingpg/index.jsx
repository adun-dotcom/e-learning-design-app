import React from 'react'
import MyFooter from '../Footer'
import MyButton from '../button'
import MyNav from '../navbar'
import BrowseSkill from './Browse'
import BuildSkill from './Build'
import CoursePreview from './Designs'
import NewsLetter from './News'
import Register from '../login/SignUp'
import LoginUser from '../login/Login'
function LandingPg() {
   const [modalSignupShow, setModalSignupShow] = React.useState(false)
   const [modalLoginShow, setModalLoginShow] = React.useState(false)
  return (
    <div>
      <MyNav>
        <MyButton
          text="Log in"
          clsName="button-white border-0 btn btn-lg mr-5"
          onClick={() => setModalLoginShow(true)}
        />

        <MyButton
          text="Sign up for free"
          clsName="button border-0 btn btn-lg"
          onClick={() => setModalSignupShow(true)}
        />
        <Register
          show={modalSignupShow}
          onHide={() => setModalSignupShow(false)}
        />
        <LoginUser
          show={modalLoginShow}
          onHide={() => setModalLoginShow(false)}
        />
      </MyNav>
      <BuildSkill />
      <CoursePreview />
      <BrowseSkill />
      <NewsLetter />
      <MyFooter />
    </div>
  )
}

export default LandingPg
