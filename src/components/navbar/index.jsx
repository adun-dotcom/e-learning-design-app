import React, { useEffect, useState, useRef } from 'react'
import './style.css'
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import AppLogo from '../../assets/LEARNDESIGN.svg'
import { Link, useHistory, useLocation } from 'react-router-dom'
import MyButton from '../button'
import Notify from './Notify'
import { useSelector, useDispatch } from 'react-redux'
import useStyles from './styles'
import clsx from 'clsx'
import SimpleMenu from './Profile'
import Profile from './Profile'
import DropdownPg from './ExploreDropdown'

function MyNav({ active, clsBar }) {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState(false)
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const { push } = useHistory()
  const dispatch = useDispatch()
  const location = useLocation()
  const classes = useStyles()
  const node = useRef()
  useEffect(() => {
    const token = user?.token
    setUser(JSON.parse(localStorage.getItem('profile')))
  }, [location])
  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    setUser(null)
    push('/')
  }
  const navToggler = () => {
    setOpen(!open)
  }
  const searchToggler = () => {
    setSearch(!search)
  }
  const hideSearch = (e) => {
    if (node.current.contains(e.target)) {
      // inside click
      return
    }
    // outside click
    setSearch(false)
  }
  useEffect(() => {
    document.addEventListener('mousedown', hideSearch)

    return () => {
      document.removeEventListener('mousedown', hideSearch)
    }
  }, [])

  return (
    <>
      <div className="mobile-menu">
        <div className={open ? 'change' : 'iconbar'} onClick={navToggler}>
          <div className={clsx('bar1', clsBar)}></div>
          <div className={clsx('bar2', clsBar)}></div>
          <div className={clsx('bar3', clsBar)}></div>
        </div>
        <div
          className={clsx(
            'right-nav',
            open ? 'right-nav show-nav' : 'right-nav hide-nav'
          )}
        >
          <div className="mobile-view mobile-list">
            <DropdownPg />
          </div>

          <Nav.Link
            href="/learnpg"
            className={clsx(
              'nav-title mobile-view mobile-list',
              active === '/learn' ? 'active' : ''
            )}
          >
            Learn more
          </Nav.Link>
          {user ? (
            <div className="mobile-view mobile-list">
              <Profile logout={logout} />
              <Notify />
            </div>
          ) : (
            <div className="mobile-view button-div mobile-list">
              <MyButton
                text="login"
                clsName="button-white border-0 btn btn-lg"
                path="/login"
              />
              <MyButton
                text="sign up for free"
                clsName="button border-0 btn btn-lg"
                path="/signup"
              />
            </div>
          )}
        </div>
        <Navbar.Brand className="mobile-view" to="/" href="/" component={Link}>
          <img src={AppLogo} alt="" />
        </Navbar.Brand>
        <Form className="form open-search mobile-view">
          <span>
            <i class="fas fa-search"></i>
          </span>
          <FormControl
            type="text"
            placeholder="What do you want to learn?"
            className=" nav-input"
          />
        </Form>
        <div className="hidden-search">
          <i
            className={!search ? 'fas fa-search' : ''}
            onClick={searchToggler}
          ></i>
          <Form className={search ? 'form ' : 'close-form'} ref={node}>
            <FormControl
              type="text"
              placeholder="What do you want to learn?"
              className=" nav-input"
              blur={searchToggler}
            />
          </Form>
        </div>
      </div>
      <Navbar className=" navbar-header web-view">
        <Navbar.Brand className="web-view" href="/" component={Link} to="/">
          <img src={AppLogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto align-items-center ">
            <Nav.Link
              
              className={clsx(
                'nav-title web-view',
                active === '/explore' ? 'active' : ''
              )}
            >
              <DropdownPg />
            </Nav.Link>
            <Nav.Link
              href="/learnpg"
              className={clsx(
                'nav-title web-view',
                active === '/learn' ? 'active' : ''
              )}
            >
              Learn more
            </Nav.Link>
            <Form inline className="form web-view">
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
              <div className="web-view">
                <span className="d-flex align-items-center">
                  <Profile logout={logout} />
                  <Notify />
                </span>
              </div>
              {/* <div className="mobile-view"></div> */}
            </div>
          ) : (
            <div>
              <div className="web-view">
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
            </div>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default MyNav
