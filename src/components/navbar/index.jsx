import React from 'react';
import './style.css'
import {Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap'
import AppLogo from '../../assets/LEARNDESIGN.svg'
import {Link} from 'react-router-dom'
import MyButton from '../button'

function MyNav({children}){
   
    return (
      <Navbar bg="light" expand="lg" className=" navbar-header">
        <Navbar.Brand href="/">
          <img src={AppLogo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown
              title="Explore"
              id="basic-nav-dropdown"
              className="nav-title"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/learnpg" className="nav-title">
              Learn more
            </Nav.Link>
          </Nav>
          <Form inline className="form">
            <span>
              <i class="fas fa-search"></i>
            </span>
            <FormControl
              type="text"
              placeholder="What do you want to learn?"
              className=" nav-input"
            />
            <div> {children}</div>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      // <nav className="wrapper">
      //   <a href="#" className="nav-brand">
      //     <img src={AppLogo} alt="" />
      //   </a>

      //   <Link to="#">Learn more</Link>
      //   <form action="" className="">
      //     <span>
      //       <i class="fas fa-search"></i>
      //     </span>
      //     <input
      //       className="rounded"
      //       type="text"
      //       placeholder="what do you want to know?"
      //     />
      //   </form>
      //   <div>
      //     <MyButton
      //       text="Log in"
      //       clsName="button-white border-0 btn btn-lg mr-5"
      //     />
      //     <MyButton
      //       text="Sign up for free"
      //       clsName="button border-0 btn btn-lg"
      //     />
      //   </div>
      // </nav>
    )
}

export default MyNav