import {AUTH} from './UserType'
import * as api from '../api/config'

export const signin = (values, history)=> async (dispatch)=>{
    const { data } = await api.signIn(values)
    console.log(data, 'tokenmmm, resultttt')
    try {
    dispatch({ type: AUTH, data})
        history.push('/')
    } catch (error) {
        console.log(error)
    }
}

export const signup = (values, history) => async (dispatch) => {
     const { data } = await api.signUp(values)
     console.log(data, 'tokenmmm, resultttt')
  try {
    dispatch({ type: 'AUTH', data})
    console.log(data)
    history.push('/')
  } catch (error) {
    console.log(error)
  }
}