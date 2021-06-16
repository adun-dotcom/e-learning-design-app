import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Avatar } from '@material-ui/core'
import useStyles from './styles'
import PersonIcon from '@material-ui/icons/Person'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { Link } from 'react-router-dom'
import clsx from 'clsx'

export default function Profile({ logout }) {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

  const classes = useStyles()
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <div class="dropdown">
        <Avatar
          alt={user.result.name}
          src={user.result.imageUrl}
          className={clsx(classes.avatar, 'dropbtn')}
        >
          {user.result.name.charAt(0)}
        </Avatar>
        <div class="profile-content">
          <a href="/profile">
            <PersonIcon fontSize="small" />
            <span
              component={Link}
              to="/profile"
            >
              Profile
            </span>
          </a>
          <a href="#">
            <BookmarkIcon fontSize="small" />
            <span >Saved courses</span>
          </a>
          <hr />
          <a href="/" onClick={logout}>
            <ExitToAppIcon fontSize="small" />
            <span>Logout</span>
          </a>
        </div>
      </div>
    </div>
  )
}
