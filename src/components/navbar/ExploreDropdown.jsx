import React, {useState} from 'react'
import {NavDropdown } from 'react-bootstrap'
import { DropdownSubmenu, NavDropdownMenu } from 'react-bootstrap-submenu'
const ExploreDropdown = () => {
  
const [show, setShow] = useState(false)
const showDropdown = (e) => {
  setShow(!show)
  
}
const hideDropdown = (e) => {
  setShow(false)
}
  return (
    <NavDropdownMenu
      className="ml-5  nav-title"
      title="Explore"
      id="collasible-nav-dropdown"
      // show={show}
      //  onMouseLeave={() => setShowDropdown(false)}
      // onMouseOver={() => setShowDropdown(true)}
    >
      <div>
        <DropdownSubmenu href="#action/3.7" title="Courses">
          <NavDropdown.Item href="#action/8.1">Adobe XD</NavDropdown.Item>
          <NavDropdown.Item href="#action/8.1">Figma</NavDropdown.Item>
          <NavDropdown.Item href="#action/8.1">
            User Experience Design
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/8.1">Photoshop</NavDropdown.Item>
          <NavDropdown.Item href="#action/8.1">User Research</NavDropdown.Item>
        </DropdownSubmenu>
        <DropdownSubmenu href="#action/3.7" title="Resources">
          <NavDropdown.Item href="#action/8.1">Images</NavDropdown.Item>
          <NavDropdown.Item href="#action/8.1">Icons</NavDropdown.Item>
          <NavDropdown.Item href="#action/8.1">Illustrations</NavDropdown.Item>
        </DropdownSubmenu>
        <DropdownSubmenu href="#action/3.7" title="Tools">
          <NavDropdown.Item href="#action/8.1">Photoshop</NavDropdown.Item>
          <NavDropdown.Item href="#action/8.1">Figma</NavDropdown.Item>
          <NavDropdown.Item href="#action/8.1">Illustrator</NavDropdown.Item>
          <NavDropdown.Item href="#action/8.1">Adobe XD</NavDropdown.Item>
          <NavDropdown.Item href="#action/8.1">Indesign</NavDropdown.Item>
        </DropdownSubmenu>
        <DropdownSubmenu href="#action/3.7" title="Books">
          <NavDropdown.Item href="#action/8.1">
            Design of everyday things
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/8.1">Refactoring UI</NavDropdown.Item>
          <NavDropdown.Item href="#action/8.1">
            Designing brand identity
          </NavDropdown.Item>
          <NavDropdown.Item href="#action/8.1">
            Logo Design Love
          </NavDropdown.Item>
        </DropdownSubmenu>
        <DropdownSubmenu href="#action/3.7" title="Articles">
          <NavDropdown.Item href="#action/8.1">Images</NavDropdown.Item>
          <NavDropdown.Item href="#action/8.1">Icons</NavDropdown.Item>
          <NavDropdown.Item href="#action/8.1">Illustrations</NavDropdown.Item>
        </DropdownSubmenu>
      </div>
    </NavDropdownMenu>
  )
}

export default ExploreDropdown
