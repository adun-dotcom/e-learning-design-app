import { fade, makeStyles } from '@material-ui/core/styles'

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#F8F9FA',

    '& label.Mui-focused': {
      color: '#495057',
    },

    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#495057',
      },

      '&.Mui-focused fieldset': {
        borderColor: '#FE5F00',
      },
    },
  },

  textField: {
    width: '100%',
    marginTop: 40,
  },
  subDiv: {
    width: 400,
    height: 600,
  },
  link: {
    color: '#4ABBCD !important',
    fontSize: 14,
    paddingLeft: 5,
    cursor: 'pointer',
    fontWeight: 400,
  },
  signupSpan: {
    marginTop: 80,
    fontSize: 14,
  },

  authBtn:{
    width: '100%',
    marginTop: '30px'
  },

  orDiv: {
    display:"flex",
    justifyContent:'space-between',
    margin: '10px 0'
  },

  hr:{
    width: '80%'
  },

  google:{
    background: "#ffff !important",
    color: '#000 !important'
  },

  brandName:{
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '15px'
  }
}))
