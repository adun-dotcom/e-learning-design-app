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
}))
