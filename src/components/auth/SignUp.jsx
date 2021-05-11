import React , {useState, useEffect} from 'react'
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  Link,
} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import MyButton from '../button'
import AppLogo from '../../assets/LEARNDESIGN.svg'
import clsx from 'clsx'
import Axios from 'axios'
import {useDispatch, useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import GoogleAuth from './GoogleAuth'
import useStyles from './style'
import ClipLoader from 'react-spinners/ClipLoader'
import { signup} from '../../redux/user/account'


export default function SignupPg() {
  const classes = useStyles()
  const dispatch = useDispatch()
 const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    showPassword: false,
  })

  
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name] : e.target.value })
  }
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const onSubmit = (e)=>{
    e.preventDefault()
    setLoading(true)
    dispatch(signup(values, history))
  }

  
  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.subDiv}>
        <div className="text-center mb-5">
          <img src={AppLogo} alt="" />
        </div>

        <TextField
          id="outlined-multiline-flexible" className={classes.textField} label="First Name" multiline name="firstName" rowsMax={4} value={values.firstName} onChange={handleChange} variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible" className={classes.textField} label="Last Name" multiline name="lastName" rowsMax={4} value={values.lastName} onChange={handleChange} variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
className={classes.textField} label="Email Address" multiline name="email" rowsMax={4} value={values.email} onChange={handleChange} variant="outlined"
        />

        <FormControl
          className={clsx(classes.margin, classes.textField)} variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            name="password"
            onChange={ handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
        <MyButton
          text={
            loading ? (
              <ClipLoader loading={loading} size={20}  />
            ) : (
              'signup'
            )
          }
          clsName="button border-0 btn btn-lg modal-button mt-3"
          onClick={onSubmit}
        />
        <div className="or-separator my-2">
          <hr />
          <div>or</div>
          <hr />
        </div>
        <GoogleAuth />
      </div>
    </form>
  )
}
