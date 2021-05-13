import React, { useState } from 'react'
import { Dropdown, FormControl, NavDropdown } from 'react-bootstrap'
import { DropdownSubmenu, NavDropdownMenu } from 'react-bootstrap-submenu'
const DropdownPg= () => {
 
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
    className="drop-pg"
      href=""
      ref={ref}
      onMouseOver={(e) => {
        e.preventDefault()
        onClick(e)
      }}
    >
      {children}
      
    </a>
  ))
  return (
    <Dropdown className="drop-pg">
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        Explore
      </Dropdown.Toggle>

      <Dropdown.Menu className="drop">
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
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownPg
