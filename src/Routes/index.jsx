import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ExplorePg from '../components/explore'
import LandingPg from '../components/landingpg'
import ViewAll from '../components/viewall/View'
import LearnPg from '../components/learn'
import LoginUser from '../components/login/Login'
import ForgotPwd from '../components/auth/ForgotPwd'
import Loginpg from '../components/auth/Login'
import ResetPwd from '../components/auth/Reset'
import SignupPg from '../components/auth/SignUp'
import VerifyPwd from '../components/auth/Verify'
// import NotFound from '../Components/NotFound'
// import { Login } from '../Components/Login/Login'
// import Wellcome from '../Components/Dashboard'
// import HomePg from '../Components/Home'
// import UserComplaint from '../Components/Complaints'
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPg} />
      <Route path="/viewall" component={ViewAll} />
      <Route path="/learnpg" component={LearnPg} />
      <Route path="/explorepg" component={ExplorePg} />
      <Route path="/login" component={Loginpg} />
      <Route path="/signup" component={SignupPg} />
      <Route path="/forgot" component={ForgotPwd} />
      <Route path="/verify" component={VerifyPwd} />
      <Route path="/reset" component={ResetPwd} />
    </Switch>
  )
}


export default Routes
