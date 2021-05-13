import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ExplorePg from '../components/explore'
import LandingPg from '../components/landingpg'
import ViewAll from '../components/viewall/View'
import LearnPg from '../components/learn'
import ForgotPwd from '../components/auth/ForgotPwd'
import Loginpg from '../components/auth/Login'
import ResetPwd from '../components/auth/Reset'
import SignupPg from '../components/auth/SignUp'
import VerifyPwd from '../components/auth/Verify'
import AlertBar from '../components/AlertBar'
import PrivateRoute from './authRoute'
import {useSelector} from 'react-redux'
import ProfilePg from '../components/Profile.jsx'
// import NotFound from '../Components/NotFound'

const Routes = () => {
  const auth = useSelector(state => state.auth)
  console.log(auth)
  return (
    <>
      <Switch>
        <Route exact path="/" component={LandingPg} />
        <Route exact path="/viewall" component={ViewAll} />
        <Route exact path="/learnpg" component={LearnPg} />
        <Route exact path="/login" component={Loginpg} />
        <Route exact path="/signup" component={SignupPg} />
        <Route exact path="/forgot" component={ForgotPwd} />
        <Route exact path="/verify" component={VerifyPwd} />
        <Route exact path="/reset" component={ResetPwd} />
        
        <PrivateRoute
          authed={auth.loggingIn}
          path="/explorepg"
          component={ExplorePg}
        />
        <PrivateRoute
          authed={auth.loggingIn}
          path="/profile"
          component={ProfilePg}
        />
        
      </Switch>
      <AlertBar />
    </>
  )
}


export default Routes
