import React, { useState } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import Badge from '@material-ui/core/Badge'
import NotificationsIcon from '@material-ui/icons/Notifications'
import useStyles from './styles'
import ListItemText from '@material-ui/core/ListItemText'
import { withStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import clsx from 'clsx'
const StyledMenu = withStyles({
  paper: {
    border: '1px solid #4ABBCD',
    width: 237,
    textAlign: 'center'
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

export default function Notify() {
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
        aria-controls="simple-menu"
        aria-haspopup="true"
      >
        <Badge badgeContent={4} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>

      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div>
          <StyledMenuItem className={classes.typo}>
            <ListItemText
              disableTypography
              primary={
                <Typography type="body2" className={classes.profileText}>
                  Notifications
                </Typography>
              }
            />
          </StyledMenuItem>
          <StyledMenuItem className={classes.typo}>
            <ListItemText
              disableTypography
              primary={
                <Typography type="body2" className={classes.profileLight}>
                  No Notifications
                </Typography>
              }
            />
          </StyledMenuItem>
        </div>
      </StyledMenu>
    </div>
  )
}
