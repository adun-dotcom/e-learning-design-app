// import Axios from 'axios'
// import {
//   AUTH,
//   SIGNUP_SUCCESS,
//   SIGNUP_REQUEST,
//   SIGNUP_FAILURE,
// } from './UserType'
// import * as api from '../api/config'

// export const login = (form) => async (dispatch) => {
//   try {
//     const { data } = await api.signIn(form)
//     console.log(data)
//     if (data) {
//       dispatch({ type: AUTH, data: data })
//     } else {
//       console.log('not going')
//     }
//   } catch (error) {
//     console.log(error)
//   }
// }

// export const signup = (form) => (dispatch) => {
//   dispatch({
//     type: SIGNUP_REQUEST,
//   })
//   Axios.post('http://localhost:5000/users/signup', form)
//     .then((res) => {
//       const { token, result } = res.data
//       console.log(result, token)
//       if (token) {
//         dispatch({ type: AUTH, data: { result, token } })
//       } else {
//         dispatch({
//           type: SIGNUP_FAILURE,
//           data: { message: 'error occured while creating account' },
//         })
//         console.log('wahala dey😒‼')
//       }
//     })
//     .catch((error) => {
//       dispatch({ type: SIGNUP_FAILURE, data: error })
//     })
// }
