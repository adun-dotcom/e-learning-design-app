import {AUTH} from './UserType'
import * as api from '../api/config'

export const signin = (values, history)=> async (dispatch)=>{
    const { data } = await api.signIn(values)
    console.log(data, 'tokenmmm, resultttt')
    try {
    dispatch({ type: AUTH, data})
        history.push('/')
        // dispatch(alertShow('Welcome back'))
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

// export const editUser = (values) => async (dispatch) => {
//   const  result = await api.editUser(values)
//   console.log(result, 'tokenmmm, resultttt')
//   try {
//     dispatch({ type: 'AUTH', data: result.data})
//     console.log(result , 'hdsd')
//   } catch (error) {
//     console.log(error)
//   }
// }