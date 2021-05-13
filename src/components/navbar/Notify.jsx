import React from 'react'
import Badge from '@material-ui/core/Badge'
import NotificationsIcon from '@material-ui/icons/Notifications'
import useStyles from './styles'

export default function Notify() {
   const classes = useStyles()
   
  return (
    <div>
      <div class="dropdown">
        <Badge badgeContent={4} color="secondary" className=" badge">
          <NotificationsIcon />
        </Badge>
        <div class="profile-content badge-content">
          <a href="/profile">
            <p className={classes.profileText}>Notification</p>
          </a>
          <a href="#">
            <p className={classes.profileLight}>No Notifications</p>
          </a>
        </div>
      </div>
    </div>
  )
}
