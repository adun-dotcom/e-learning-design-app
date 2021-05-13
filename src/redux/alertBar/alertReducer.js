import { SHOW_ALERT, HIDE_ALERT } from './alertType'
const INITIAL_STATE = {
    open : false,
    message: ''
}

const alertReducer = (state = INITIAL_STATE, action)=>{
    switch(action.type){
        case SHOW_ALERT:
        return {...state, open: true, message: action.payload}
        case HIDE_ALERT:
            return {...state, ...INITIAL_STATE}
            default:
                return state
    }
}

export default alertReducer