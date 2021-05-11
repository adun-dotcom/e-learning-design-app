import {
  SIGNUP_USER_REQUEST,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
} from './UserType'

const initialState = {
  loading: false,
  data: [],
  signupSuccess: false,
  signupError: false,
  errorMessage: '',
}

/**
 * Reducer
 *
 * @export
 */
const signupReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGNUP_USER_REQUEST:
      return {
        ...state,
        loading: true,
        signupError: false,
      }
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        signupSuccess: true,
        signupError: false,
      }
    case SIGNUP_USER_FAILURE:
      return {
        ...state,
        loading: false,
        signupSuccess: false,
        signupError: true,
        errorMessage: payload.error,
      }

    default:
      return state
  }
}

export default signupReducer
