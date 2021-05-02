import React from 'react'
import {CardGroup} from '../style'

function Cards({img, title, link, name, children}){
    const [icon, setIcon] = React.useState(<i class="far fa-bookmark"></i>)
    const [save, setSave] = React.useState('Save')

    function changeIcon(){
        setIcon(<i class="fas fa-bookmark"></i>)
        setSave('Saved')
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
                {icon}
                {save}
                </span>
            <span className="blue-span">Paid</span>
            <span className="blue-span advance-span">Advanced</span>
          </div>
        </div>
      </CardGroup>
    )
}

export default Cards