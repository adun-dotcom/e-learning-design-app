import React, {useEffect, useState} from 'react'
import './style.css'
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import AppLogo from '../../assets/LEARNDESIGN.svg'
import { Link , useHistory, useLocation} from 'react-router-dom'
import MyButton from '../button'
import Notify from './Notify'
import {useSelector, useDispatch} from 'react-redux'
import useStyles from './styles'
import clsx from 'clsx'
import SimpleMenu from './Profile'
import Profile from './Profile'
import DropdownPg from './ExploreDropdown'
// import {HiMenu} from 'react-icons'

function MyNav({active}) {
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
        <Nav className="mr-auto align-items-center">
          <Nav.Link
            href="/learnpg"
            className={clsx('nav-title', active === "/explore" ? 'active' : '')}
          >
            <DropdownPg />
          </Nav.Link>
          <Nav.Link
            href="/learnpg"
            className={clsx('nav-title', active === "/learn" ? 'active' : '')}
          >
            Learn more
          </Nav.Link>
          <Form inline className="form ">
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
              <Profile logout={logout} />
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
