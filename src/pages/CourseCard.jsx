import React from 'react'
import { CardGroup } from '../components/style'

function Cards({ img, title, link, name, children }) {
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
        <img src={img} alt="" />
      </div>
      <div className="card-subdiv">
        <p>Introduction to {title}</p>
        <a href="">{link}</a>
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
          <span className="blue-span">Paid</span>
          <span className="blue-span advance-span">Advanced</span>
        </div>
      </div>
    </CardGroup>
  )
}

export default Cards
