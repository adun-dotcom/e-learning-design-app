import React from 'react'
import MyFooter from '../Footer'
import MyNav from '../navbar'
import Cards from '../../pages/CourseCard'
import udemy from '../../assets/udemy.png'
import { ProfileSection } from '../style'
import InfoPg from './Info'

function ProfilePg() {
    return (
      <div>
        <MyNav />
        <ProfileSection className="wrapper">
          <InfoPg />
          
        </ProfileSection>

        <MyFooter />
      </div>
    )
}

export default ProfilePg
