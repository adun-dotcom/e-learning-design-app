import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ExplorePg from '../components/explore'
import LandingPg from '../components/landingpg'
import ViewAll from '../components/landingpg/View'
import LearnPg from '../components/learn'
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
    </Switch>
  )
}


export default Routes
