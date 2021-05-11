import api from './config'

// post sample
export const signupApi = (data) => {
  let request = api.post('/signup', data)
  return request
}
