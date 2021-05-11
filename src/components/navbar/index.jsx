import React, {useEffect, useState} from 'react'
import './style.css'
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import AppLogo from '../../assets/LEARNDESIGN.svg'
import { Link , useHistory, useLocation} from 'react-router-dom'
import MyButton from '../button'
import ExploreDropdown from './ExploreDropdown'
import Notify from './Notify'
import {useSelector, useDispatch} from 'react-redux'
import useStyles from './styles'
import clsx from 'clsx'
import SimpleMenu from './Profile'
import Profile from './Profile'

function MyNav() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  console.log(user)
  const { push } = useHistory()
  const location = useLocation()
  useEffect(() => {
    const token = user?.token
    setUser(JSON.parse(localStorage.getItem('profile')))
    
  }, [location])
  
  const dispatch = useDispatch()
  
  const logout = () => {
    dispatch({type: 'LOGOUT'})
    setUser(null)
    push('/')
  }
  const classes = useStyles()
  
  
  return (
    <Navbar bg="dark" expand="lg" className="border navbar-header">
      <Navbar.Brand href="/" component={Link} to="/">
        <img src={AppLogo} alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <ExploreDropdown />
          <Nav.Link href="/learnpg" className={clsx('nav-title')}>
            Learn more
          </Nav.Link>
          <Form inline className="form ml-5">
            <span>
              <i class="fas fa-search"></i>
            </span>
            <FormControl
              type="text"
              placeholder="What do you want to learn?"
              className=" nav-input"
            />
          </Form>
        </Nav>
     
        {user ? (
          
          <div>
            <span className="d-flex align-items-center">
              <Profile logout={logout}/>
              <Notify />
            </span>
          </div>
        ) : (
          <div>
            <MyButton
              text="login"
              clsName="button-white border-0 btn btn-lg"
              path="/login"
            />
            <MyButton
              text="sign up for free"
              clsName="button border-0 btn btn-lg ml-5"
              path="/signup"
            />
          </div>
        )}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default MyNav
