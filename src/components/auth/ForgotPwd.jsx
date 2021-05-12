import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  TextField,
} from '@material-ui/core'
import MyButton from '../button'
import AppLogo from '../../assets/LEARNDESIGN.svg'
import clsx from 'clsx'
import useStyles from './style'
import { Link, useHistory } from 'react-router-dom'
import { Navbar } from 'react-bootstrap'

export default function ForgotPwd() {
  const classes = useStyles()
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  })

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value })
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
        <div>
          <p className={classes.forgotText}>
            Enter the email associated with your account and we’ll send an email
            with instructions to reset your password.
          </p>
        </div>
        <TextField
          id="outlined-multiline-flexible"
          className={classes.textField}
          label="Email Address"
          multiline
          rowsMax={4}
          value={values.email}
          onChange={handleChange}
          variant="outlined"
        />
        <MyButton
          text="Send"
          clsName={clsx(
            'button border-0 btn btn-lg ',
            classes.authBtn
          )}
          path="/verify"
        />

        <span className={clsx('d-block text-center', classes.signupSpan)}>
          Remember password
          <a className={classes.link} href="/login">
            log in
          </a>{' '}
        </span>
      </div>
    </form>
  )
}
