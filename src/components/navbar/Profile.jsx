import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import { Avatar } from '@material-ui/core'
import useStyles from './styles'
import PersonIcon from '@material-ui/icons/Person'
import BookmarkIcon from '@material-ui/icons/Bookmark'
import Typography from '@material-ui/core/Typography'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #4ABBCD',
    width: 237
  },

})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
))

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem)

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
      <IconButton
        aria-label="show 4 new mails"
        color="inherit"
        onClick={handleClick}
        aria-controls="customized-menu"
        aria-haspopup="true"
      >
        <Avatar
          alt={user.result.name}
          src={user.result.imageUrl}
          className={classes.avatar}
        >
          {user.result.name.charAt(0)}
        </Avatar>
      </IconButton>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div>
          <StyledMenuItem>
            <ListItemIcon>
              <PersonIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography type="body2" className={classes.profileText}>
                  Profile
                </Typography>
              }
            />
          </StyledMenuItem>
          <StyledMenuItem>
            <ListItemIcon>
              <BookmarkIcon fontSize="small" />
            </ListItemIcon>

            <ListItemText
              disableTypography
              primary={
                <Typography type="body2" className={classes.profileLight}>
                  Saved courses
                </Typography>
              }
            />
          </StyledMenuItem>

          <div className={classes.dived}></div>
          <StyledMenuItem onClick={logout}>
            <ListItemIcon>
              <ExitToAppIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography type="body2" className={classes.profileLight}>
                  Logout
                </Typography>
              }
            />
          </StyledMenuItem>
        </div>
      </StyledMenu>
    </div>
  )
}
