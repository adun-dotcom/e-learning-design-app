import React, { useState } from 'react'
import {Link} from 'react-router-dom'

const DropdownPg = () => {
  return (
    <div className="dropdown">
      <a className="dropbtn explore-link">Explore</a>
      <div className="dropdown-content">
        <a href="#" className="dropdown-link">
          <span className="spanned-link">
            <p>Courses</p>
            <i class="fas fa-chevron-right"></i>
          </span>

          <ul className="dropdown-subcontent">
            <li>
              <Link to="/explorepg/adobe-xd">Adobe XD</Link>
            </li>
            <li>
              <Link to="/explorepg/figma">Figma</Link>
            </li>
            <li>
              <Link to="/explorepg/design">User Experience Design</Link>
            </li>
            <li>
              <Link to="/explorepg/adobe-xd">Photoshop</Link>
            </li>
            <li>
              <Link to="/explorepg/research">User Research</Link>
            </li>
          </ul>
        </a>
        <a href="#" className="dropdown-link">
          <span className="spanned-link">
            <p>Resources</p>
            <i class="fas fa-chevron-right"></i>
          </span>

          <ul className="dropdown-subcontent">
            <li>Images</li>
            <li>Icons</li>
            <li>Illustrations</li>
          </ul>
        </a>
        <a href="#" className="dropdown-link">
          <span className="spanned-link">
            <p>Tools</p>
            <i class="fas fa-chevron-right"></i>
          </span>

          <ul className="dropdown-subcontent">
            <li>
              <Link to="/explorepg/adobe-xd">Photoshop</Link>
            </li>
            <li>
              <Link to="/explorepg/figma">Figma</Link>
            </li>
            <li>
              <Link to="/explorepg/illustration">Illustrator</Link>
            </li>
            <li>
              <Link to="/explorepg/adobe-xd">Adobe XD</Link>
            </li>
            <li>
              <Link to="/explorepg/design">Indesign</Link>
            </li>
          </ul>
        </a>
        <a href="#" className="dropdown-link">
          <span className="spanned-link">
            <p>Books</p>
            <i class="fas fa-chevron-right"></i>
          </span>

          <ul className="dropdown-subcontent">
            <li>Design of everyday things</li>
            <li>Refactoring UI</li>
            <li> Designing brand identity</li>
            <li>Logo Design Love</li>
          </ul>
        </a>
        <a href="#" className="dropdown-link">
          <span className="spanned-link">
            <p>Articles</p>
            <i class="fas fa-chevron-right"></i>
          </span>

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
