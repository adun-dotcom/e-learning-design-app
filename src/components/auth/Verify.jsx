import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { TextField } from '@material-ui/core'
import MyButton from '../button'
import AppLogo from '../../assets/LEARNDESIGN.svg'
import Email from '../../assets/email.svg'
import clsx from 'clsx'
import useStyles from './style'

export default function VerifyPwd() {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div className={classes.subDiv}>
        <div className="text-center mb-5">
          <img src={AppLogo} alt="" />
        </div>
        <div className="text-center">
          <img src={Email} alt="" />
          <p className={clsx("fw-bold mt-5", classes.forgotText)}>Check your mail</p>
          <p className={classes.forgotText}>
            We have sent a password recover instructions to your email
          </p>
        </div>

        <MyButton
          text="Open email app"
          clsName="button border-0 btn btn-lg modal-button mt-5"
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
