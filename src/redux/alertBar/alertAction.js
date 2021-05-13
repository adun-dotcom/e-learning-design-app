import {SHOW_ALERT, HIDE_ALERT} from './alertType'

export const alertShow = (data)=>{
    return{
        type: SHOW_ALERT, 
        payload: data
    }
}

export const alertHide = () => {
  return {
    type: HIDE_ALERT,
  }
}