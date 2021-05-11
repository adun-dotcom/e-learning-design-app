// import {
//   SIGNUP_USER_REQUEST,
//   SIGNUP_USER_SUCCESS,
//   SIGNUP_USER_FAILURE,
// } from './UserType'
// import { signupApi } from '../api/users'

// export const signupData = (data) => async (dispatch) => {
//   try {
//     dispatch({
//       type: SIGNUP_USER_REQUEST,
//     })
//    const { token, result } = await signupApi(data)
//     console.log(token, result)
//     if (token && result) {
//       dispatch({
//         type: SIGNUP_USER_SUCCESS,
//         payload: {
//           result: {token, result},
//         },
//       })
//       localStorage.setItem('profile', JSON.stringify(result))
//       const userInfo = JSON.stringify({
//         firstName: result.firstName,
//         lastName:result.lastName,
//       })
//       localStorage.setItem('userInfo', userInfo)
//     } else {
//       console.log('err2')
//       dispatch({
//         type: SIGNUP_USER_FAILURE,
//         payload: {
//           error: 'Failed to get data',
//         },
//       })
//     }
//   } catch (error) {
//     const status = error.response.status
//     console.log(error.response.status, 'err1')
//     if (status === 404) {
//       dispatch({
//         type: SIGNUP_USER_FAILURE,
//         payload: {
//           error: 'Username or Password is incorrect!',
//         },
//       })
//     } else {
//       dispatch({
//         type: SIGNUP_USER_FAILURE,
//         payload: {
//           error: 'Something went wrong! Try again',
//         },
//       })
//     }
//   }
// }
