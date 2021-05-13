import React, { useEffect , useState} from 'react'
import MyFooter from '../Footer'
import MyNav from '../navbar'
import BrowseSkill from '../../pages/Browse'
import BuildSkill from '../../pages/Build'
import CoursePreview from '../../pages/Designs'
import NewsLetter from '../../pages/News'
import {useDispatch, useSelector} from 'react-redux'
import {alertShow} from '../../redux/alertBar/alertAction'

function LandingPg() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
const {loggedIn} = useSelector((state)=>state.auth)
const dispatch = useDispatch()
useEffect(() => {
  if(loggedIn){
    dispatch(alertShow(`Welcome ${user.result.name}👋`))
  }
  
}, [loggedIn])
  return (
    <div>
      <MyNav/>
      <BuildSkill />
      <CoursePreview />
      <BrowseSkill />
      <NewsLetter />
      <MyFooter />
    </div>
  )
}

export default LandingPg
