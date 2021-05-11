import React, { useState, useEffect } from 'react'
import Google from '../../assets/google.svg'
import { Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import { useDispatch } from 'react-redux'


export default function GoogleAuth() {
  const dispatch = useDispatch()
  const { push } = useHistory()

  const googleFailure = () => {
    console.log('google auth failed')
  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj
    const token = res?.tokenId
    console.log(res)

    try {
      dispatch({type: 'AUTH', data: {result, token}})
      push('/')
    } catch (error) {
      console.log(error)
    }
  }

  return (
        <GoogleLogin
          clientId="811836115569-ihjc68k3rm55sus3qqoco3ghlc2cgh2f.apps.googleusercontent.com"
          render={(renderProps) => (
            <Button
              size="lg"
              block
              className="modal-google"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <img src={Google} alt="" className="mr-2" /> Google
            </Button>
          )}
          onFailure={googleFailure}
          onSuccess={googleSuccess}
          cookiePolicy="single_host_origin"
        />
  )
}
