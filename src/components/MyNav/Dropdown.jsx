import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: 'none',
        border: 0,
        color: 'green',
        height: 48,
        padding: '0 30px',
      },
    },
  },
})

function OverridesCss() {
  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          className={theme.MuiButton}
        >
          Explore
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className={theme.text}
        >
          <MenuItem onClick={handleClose}>Courses</MenuItem>
          <MenuItem onClick={handleClose}>Resources</MenuItem>
          <MenuItem onClick={handleClose}>Tools</MenuItem>
          <MenuItem onClick={handleClose}>Books</MenuItem>
          <MenuItem onClick={handleClose}>Articles</MenuItem>
        </Menu>
      </div>
    </ThemeProvider>
  )
}

export default OverridesCss
