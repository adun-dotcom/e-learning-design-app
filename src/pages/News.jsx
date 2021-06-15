import React, {useEffect} from 'react';
import MyButton from '../components/button';
import {NewsSection} from '../components/style'
import Aos from 'aos'
import 'aos/dist/aos.css'
function NewsLetter() {
   useEffect(() => {
     Aos.init({ duration: 2000 })
   }, [])
    return (
      <NewsSection className="wrapper " data-aos="fade-up">
        <div className="container pt-5 text-center" data-aos="fade-up">
          <p className="text-center news-active" data-aos="fade-left">
            Want to be updated whenever a new post is added?
          </p>
          <p className="text-center news-hidden">Stay updated on new Courses</p>
          <input
            data-aos="fade-up"
            className="d-block border rounded "
            type="email"
            placeholder="Enter your email address"
          />
          <MyButton
            data-aos="fade-up"
            text="Sign up to our newsletter"
            clsName="button border-0 btn btn-lg "
          />
        </div>
      </NewsSection>
    )
}

export default NewsLetter