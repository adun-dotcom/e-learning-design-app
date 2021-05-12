import React, { useState, useEffect } from 'react'
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput
} from '@material-ui/core'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import MyButton from '../button'
import AppLogo from '../../assets/LEARNDESIGN.svg'
import clsx from 'clsx'
import {Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import GoogleAuth from './GoogleAuth'
import useStyles from './style'
import ClipLoader from 'react-spinners/ClipLoader'
import { signin } from '../../redux/user/account'
import { Navbar } from 'react-bootstrap'


export default function Loginpg() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [validateError, setValidateError] = useState(false)
  const history = useHistory()
  const [loading, setLoading] = useState(false)
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  })

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setValidateError(false)
    if (values.email.trim() === '' || values.password.trim() === '') {
      console.log('error')
      setValidateError(true)
    } 
    else {
      setLoading(true)
      dispatch(signin(values, history))
    }
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.subDiv}>
        <Navbar.Brand
          href="/"
          component={Link}
          to="/"
          className={classes.brandName}
        >
          <img src={AppLogo} alt="" />
        </Navbar.Brand>
        <TextField
          id="outlined-multiline-flexible"
          className={classes.textField}
          label="Email Address"
          name="email"
          multiline
          rowsMax={4}
          value={values.email}
          onChange={handleChange}
          variant="outlined"
        />
        <FormControl
          className={clsx(classes.margin, classes.textField)}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            name="password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange}
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
          <Link to="/forgot" className={clsx('text-end', classes.link)}>
            forgot password?
          </Link>
        </FormControl>
        <MyButton
          text={loading ? <ClipLoader loading={loading} size={20} /> : 'login'}
          clsName={clsx(
            'button border-0 btn btn-lg ',
            classes.authBtn
          )}
          onClick={onSubmit}
        />
        {validateError && (
          <div
            style={{
              color: 'red',
              fontSize: '12px',
              paddingTop: '7px',
            }}
          >
            Email or Password is empty!
          </div>
        )}
        <div className={classes.orDiv}>
          <hr className={classes.hr} />
          <div className="px-3">or</div>
          <hr className={classes.hr} />
        </div>
        <GoogleAuth />
        <span className={clsx('d-block text-center', classes.signupSpan)}>
          Don’t have an account?{' '}
          <a className={classes.link} href="/signup">
            Sign up
          </a>
        </span>
      </div>
    </form>
  )
}
