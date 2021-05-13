import React , {useState, useEffect} from 'react'
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
} from '@material-ui/core'
import { Navbar } from 'react-bootstrap'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import MyButton from '../button'
import AppLogo from '../../assets/LEARNDESIGN.svg'
import clsx from 'clsx'
import { Link, useHistory } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import GoogleAuth from './GoogleAuth'
import useStyles from './style'
import ClipLoader from 'react-spinners/ClipLoader'
import { signup} from '../../redux/user/account'
import {Validation} from './validation'
import TransitionsSnackbar from '../AlertBar'
import {alertShow, alertHide} from '../../redux/alertBar/alertAction'

export default function SignupPg() {
  const classes = useStyles()
  const dispatch = useDispatch()
 const [loading, setLoading] = useState(false)
  const history = useHistory()
  const [errors, setErrors] = useState({
    email: false,
    password: true,
    firstName: false,
    lastName: false,
    password: false,
  })
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
    const validate = new Validation(values)
    console.log(validate.emptyFields())
    if(validate.emptyFields()){
     return dispatch(alertShow('Form fields are required 💥'))
    }

    if(!validate.isValidMail()){
     return dispatch(alertShow('invalid email 😒'))
    }

    if(validate.validatePwd()){
     return dispatch(alertShow('password is weak ‼❌'))
    }
      setLoading(true)
      dispatch(signup(values, history))
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
          error={false}
          helperText={errors.firstName ? 'inavlid name' : ''}
          className={classes.textField}
          label="First Name"
          multiline
          name="firstName"
          rowsMax={4}
          value={values.firstName}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          className={classes.textField}
          label="Last Name"
          multiline
          name="lastName"
          rowsMax={4}
          value={values.lastName}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          error={errors.email}
          id="outlined-multiline-flexible"
          className={classes.textField}
          label="Email Address"
          multiline
          name="email"
          helperText={errors.email ? 'inavlid email' : ''}
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
            error={errors.password}
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            name="password"
            onChange={handleChange}
            helperText={errors.password ? 'password too short' : ''}
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
          text={loading ? <ClipLoader loading={loading} size={20} /> : 'signup'}
          clsName={clsx('button border-0 btn btn-lg ', classes.authBtn)}
          onClick={onSubmit}
        />
        <div className={classes.orDiv}>
          <hr className={classes.hr} />
          <div className="px-3">or</div>
          <hr className={classes.hr} />
        </div>
        <GoogleAuth />
      </div>
     
    </form>
  )
}
