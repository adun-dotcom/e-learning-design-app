import React, {useEffect} from 'react'
import Button from '@material-ui/core/Button'
import Snackbar from '@material-ui/core/Snackbar'
import Fade from '@material-ui/core/Fade'
import Slide from '@material-ui/core/Slide'
import Grow from '@material-ui/core/Grow'
import {useSelector, useDispatch} from 'react-redux'
import {alertHide} from '../redux/alertBar/alertAction'

function SlideTransition(props) {
  return <Slide {...props} direction="up" />
}

export default function TransitionsSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  })
  const {open, message} = useSelector(state => state.alert)
  const dispatch =  useDispatch()
  useEffect(()=>{
    if(open){
        setTimeout(()=>{
            dispatch(alertHide())
        }, 4000)
    }
  }, [open])


  return (
    <div>
      <Snackbar
      style={{marginTop:'40px'}}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        TransitionComponent={state.Transition}
        message={message}
        key={state.Transition.name}
      />
    </div>
  )
}
