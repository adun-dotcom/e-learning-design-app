import React from 'react'
import MyFooter from '../Footer'
import MyNav from '../navbar'
import Cards from '../../pages/CourseCard'
import udemy from '../../assets/udemy.png'
import { ProfileSection } from '../style'
import InfoPg from './Info'
import DropdownPg from '../DropdownDemo'


function ProfilePg() {
    return (
      <div>
        <MyNav />
        <DropdownPg/>
        <ProfileSection className="wrapper">
          <InfoPg />
          <div className="saved-courses">
            <h3>Saved courses</h3>
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
          </div>
        </ProfileSection>

        <MyFooter />
      </div>
    )
}

export default ProfilePg
