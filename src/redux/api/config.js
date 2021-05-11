import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:5000/users',
})

export const signIn = (values) => instance.post('/signin', values)
export const signUp = (values) => instance.post('/signup', values)


// const API = Axios.create({ baseURL: 'http://localhost:5000/users' })
// API.interceptors.request.use(req=>{
//     if(localStorage.getItem('profile')){
//         req.headers.Authorization(`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`)
//     }
// })
// export const signUp = (form) => API.post('/signup', form)
// export const signIn = (form) => API.post('/signin', form)
