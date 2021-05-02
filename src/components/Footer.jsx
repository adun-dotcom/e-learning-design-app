import React from 'react'
import AppLogo from '../assets/LEARNDESIGN.svg'
import {Link} from 'react-router-dom'
import { FooterSection } from './style'
function MyFooter(){
    return (
      <FooterSection>
           <nav >
            <img src={AppLogo} alt="" />
            <Link to="#">Learn more</Link>
            <Link to="#">Sitemap</Link>
            <Link to="#">Help & FAQ</Link>
            <Link to="#">Feedback</Link>
          </nav>
        <hr />
        <small >Copyright © 2021 LearnDesign. All rights reserved.</small>
      </FooterSection>
    )
}

export default MyFooter