import React from 'react';
import MyButton from '../components/button';
import {NewsSection} from '../components/style'
function NewsLetter() {
    return (
      <NewsSection className="wrapper ">
        <div className="container pt-5 text-center">
          <p className="text-center">Want to be updated whenever a new post is added?</p>
          <input className="d-block border rounded pl-5" type="email" placeholder="Enter your email address" />
          <MyButton
            text="Sign up to our newsletter"
            clsName="button border-0 btn btn-lg "
          />
        </div>
      </NewsSection>
    )
}

export default NewsLetter