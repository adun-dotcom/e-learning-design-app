import { combineReducers } from 'redux'
import authReducer from './user/authReducer'
import alertReducer from './alertBar/alertReducer'
const rootReducer = combineReducers({
 auth: authReducer, 
 alert: alertReducer
 
})

export default rootReducer
