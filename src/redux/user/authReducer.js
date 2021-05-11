import {AUTH, LOGOUT,} from './UserType'

const INITIAL_STATE = {
  loggedIn: false,
  loggingIn: false,
  authData: {},
  error: '',
}
const authReducer = (state ={INITIAL_STATE}, action)=>{
    switch (action.type) {
      case AUTH:
        localStorage.setItem('profile', JSON.stringify({ ...action?.data }))
        return { ...state, loggingIn:true, authData: action?.data }
      case LOGOUT:
        localStorage.clear()
        return { ...state, ...INITIAL_STATE }
      default:
        return state
    }
}

export default authReducer