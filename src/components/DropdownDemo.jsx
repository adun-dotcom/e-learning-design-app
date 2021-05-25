import React, { useState } from 'react'
import { Dropdown, FormControl, NavDropdown } from 'react-bootstrap'
import { DropdownSubmenu, NavDropdownMenu } from 'react-bootstrap-submenu'
const DropdownPg= () => {
  return (
    <div className="dropdown">
      <p className="dropbtn">Explore</p>
      <div className="dropdown-content">
        <a href="#" className="dropdown-link">
          <p>Courses</p>

          <ul className="dropdown-subcontent">
            <li>Adobe XD</li>
            <li>Figma</li>
            <li>User Experience Design</li>
            <li>Photoshop</li>
            <li>User Research</li>
          </ul>
        </a>
        <a href="#" className="dropdown-link">
          <p>Resources</p>

          <ul className="dropdown-subcontent">
            <li>Images</li>
            <li>Icons</li>
            <li>Illustrations</li>
          </ul>
        </a>
        <a href="#" className="dropdown-link">
          <p>Tools</p>

          <ul className="dropdown-subcontent">
            <li>Photoshop</li>
            <li>Figma</li>
            <li>Illustrator</li>
            <li>Adobe XD</li>
            <li>Indesign</li>
          </ul>
        </a>
        <a href="#" className="dropdown-link">
          <p>Books</p>

          <ul className="dropdown-subcontent">
            <li>Design of everyday things</li>
            <li>Refactoring UI</li>
            <li> Designing brand identity</li>
            <li>Logo Design Love</li>
          </ul>
        </a>
        <a href="#" className="dropdown-link">
          <p>Articles</p>

          <ul className="dropdown-subcontent">
            <li>Images</li>
            <li>Icons</li>
            <li>Illustrator</li>
          </ul>
        </a>
      </div>
    </div>
  )
}

export default DropdownPg
