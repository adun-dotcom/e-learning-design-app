import React from 'react'
import AppLogo from '../assets/LEARNDESIGN.svg'
import {Link} from 'react-router-dom'
import { FooterSection } from './style'
function MyFooter(){
    return (
      <FooterSection>
        <div>
          <a href="/" className="footer-logo">
            <img src={AppLogo} alt="" />
          </a>
          <Link to="#" className="footer-list">
            Learn more
          </Link>
          <Link to="#" className="footer-list">
            Sitemap
          </Link>
          <Link to="#" className="footer-list">
            Help & FAQ
          </Link>
          <Link to="#" className="footer-list">
            Feedback
          </Link>
        </div>
        <hr />
        <small>Copyright © 2021 LearnDesign. All rights reserved.</small>
      </FooterSection>
    )
}

export default MyFooter