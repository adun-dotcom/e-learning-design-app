import { fade, makeStyles } from '@material-ui/core/styles'
import { deepOrange, deepPurple } from '@material-ui/core/colors'

export default makeStyles((theme) => ({
  wrapper: {
    background: 'white',
    color: 'black',
  },

  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'block',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.black, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'black',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  dropdown: {
    border: '2px solid red',
  },

  avatar: {
    textTransform: 'uppercase',
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  },

  avatarMen: {
    border: '2px solid blue',
    marginTop: 40,
  },

  dived: {
    marginTop: 40,
    marginBottom: 10,
    width: 237,
    height: 2,
    background: '#ACB5BD',
  },

  profileText: {
    fontWeight: 500,
    color: '#212429',
  },

  profileLight: {
    color: '#495057',
  },

  typo:{
    width: 237,
    marginLeft:'auto',
    marginRight: 'auto',
    marginBottom: 50,
    textAlign: 'center'
  },
  
}))
