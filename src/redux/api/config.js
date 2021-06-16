import axios from 'axios'
 const baseURL = 'https://learn-design-0.herokuapp.com/users'
export const instance = axios.create({
  baseURL
  // baseURL: process.env.NODE_ENV==="development" ?'http://localhost:5000/users': 'https://learn-design-0.herokuapp.com/users'
})

export const signIn = (values) => instance.post('/signin', values)
export const signUp = (values) => instance.post('/signup', values)
export const editUser = async (values)  => await instance.post('/update', values)
// export const courses = ()=> instance.get('/courses' )

// instance.interceptors.request.use(req=>{
//     if(localStorage.getItem('profile')){
//         req.headers['x-access-token'] = `${JSON.parse(localStorage.getItem('profile')).token}`
//     }
// })
// export const signUp = (form) => API.post('/signup', form)
// export const signIn = (form) => API.post('/signin', form)
