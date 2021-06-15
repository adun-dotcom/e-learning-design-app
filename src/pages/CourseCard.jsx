import React from 'react'
import { CardGroup } from '../components/style'
import CourseImage from './CourseImage'

function Cards({  title, link, name, cost, type, href }) {
  const [icon, setIcon] = React.useState(false)
  const [save, setSave] = React.useState(false)

  function changeIcon() {
    if (!icon && !save) {
      setIcon(true)
      setSave(true)
    }
    else{
       setIcon(false)
       setSave(false)
    }
  }
  return (
    <CardGroup>
      <div className="card-img">
     <CourseImage/>
      </div>
      <div className="card-subdiv">
        <a href={href} target="_blank">
          Introduction to {title}
        </a>
        <p className="disabled-text">Submitted by {name}</p>
        <div className="card-spandiv">
          <span className="saved-span" onClick={changeIcon}>
            {icon ? (
              <i class="fas fa-bookmark"></i>
            ) : (
              <i class="far fa-bookmark"></i>
            )}
            {save ? 'saved' : 'save'}
          </span>
          <span className="blue-span">{cost}</span>
          <span className="blue-span advance-span">{type}</span>
        </div>
      </div>
    </CardGroup>
  )
}

export default Cards
