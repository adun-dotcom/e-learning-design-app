import React, {useState} from 'react'
import { Avatar } from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import {  useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ProfileForm from './ProfileForm'

function InfoPg() {
      const dispatch = useDispatch()
    const logout = () => {
      dispatch({ type: 'LOGOUT' })
      setUser(null)
      push('/')
    }
    const { push } = useHistory()
     const [user, setUser] = useState(
       JSON.parse(localStorage.getItem('profile'))
     )

    return (
      <div className="profile-flex ">
        <div className="profile-user">
          <div className="person-card">
            <Avatar
              alt="Remy Sharp"
              src={user.result.imageUrl}
              className="avatar"
            />
            <p className="user-name">{user.result.name}</p>
            <p className="user-email">{user.result.email}</p>
          </div>
          <hr />
          <MenuItem onClick={logout}>
            <ListItemIcon>
              <ExitToAppIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography type="body2" className="">
                  Logout
                </Typography>
              }
            />
          </MenuItem>
        </div>
        <div className="profile-form">
                <ProfileForm/>
        </div>
      </div>
    )
}

export default InfoPg
