import { combineReducers } from 'redux'
import UserReducer from './user/UserReducer'
import signupReducer from './user/signupReducer'
import authReducer from './user/authReducer'

const rootReducer = combineReducers({
 auth: authReducer,
 signup: signupReducer
 
})

export default rootReducer
