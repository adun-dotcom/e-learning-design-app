import React from 'react'
import MyButton from '../button'
import AppLogo from '../../assets/LEARNDESIGN.svg'
import Email from '../../assets/email.svg'
import clsx from 'clsx'
import useStyles from './style'
import {Navbar} from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

export default function VerifyPwd() {
  const classes = useStyles()

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
        <div className="text-center mt-5">
          <img src={Email} alt="" />
          <p className={clsx('fw-bold mt-5', classes.forgotText)}>
            Check your mail
          </p>
          <p className={classes.forgotText}>
            We have sent a password recover instructions to your email
          </p>
        </div>

        <MyButton
          text="Open email app"
          clsName={clsx(
            'button border-0 btn btn-lg ',
            classes.authBtn
          )}
          path="/reset"
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
