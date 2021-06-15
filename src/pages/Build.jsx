import React from 'react'
import MyButton from '../components/button'
import SkillGirl from '../assets/maindp.png'
import HalfCircle from '../assets/half-circle.svg'
import FullCircle from '../assets/full-circle.svg'
import { BuildSection } from '../components/style'
function BuildSkill(){
    return (
      <BuildSection className="wrapper">
        <div className="skill-text">
          <h1>Build your skill in Design</h1>
          <p>Your one stop site to the best design courses and resources.</p>
          <MyButton path="/learnpg" text="Learn more" clsName="button border-0 btn btn-lg" />
        </div>
        <div className="skill-img">
          <img src={SkillGirl} alt="" />
        </div>

        <div className="absolute-under border rounded">
          <p className="text-center">
            LearnDesign is an online design learning platform
          </p>
          <div className="absolute-over border rounded">
            <p className="text-center">
              Choose your design topic from over 3 thousand recommended courses{' '}
            </p>
          </div>
        </div>
        <img className="absolute-circle half-circle" src={HalfCircle} alt="" />
        <img className="absolute-circle full-circle" src={FullCircle} alt="" />
      </BuildSection>
    )
}

export default BuildSkill