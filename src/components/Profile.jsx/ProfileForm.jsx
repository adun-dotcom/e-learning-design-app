import React, {useState, useEffect} from 'react'
import useStyles from '../auth/style'
import ClipLoader from 'react-spinners/ClipLoader'
import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import {  useHistory } from 'react-router-dom'
import { instance } from '../../redux/api/config'
// import { editUser } from '../../redux/user/account'
import {
  TextField,
} from '@material-ui/core'
import MyButton from '../button'

function ProfileForm() {
    const classes = useStyles()
     const [loading, setLoading] = useState(false)
     const data = JSON.parse(localStorage.getItem('profile'))
     const uid = data.result?._id
    const [values, setValues] = useState({
      firstName: '',
      lastName: '',
      email: data.result?.email
     
    })
    const handleChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value })
    }

    const editUser = async (val)=>{
      const res = await instance.put('/update', val)
      console.log(res)
    }
    
    const onSubmit = async (e)=>{
      e.preventDefault()
      editUser(values)
//  dispatch(editUser(values))
   
      // const res = await instance.post('/update', values )
      // console.log(res)
    }
    return (
      <div>
        <TextField
          id="outlined-multiline-flexible"
          className={classes.textField}
          label="first Name"
          name="firstName"
          multiline
          rowsMax={4}
          value={values.firstName}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          className={classes.textField}
          label="last Name"
          name="lastName"
          multiline
          rowsMax={4}
          value={values.lastName}
          onChange={handleChange}
          variant="outlined"
        />

        <MyButton
          text={loading ? <ClipLoader loading={loading} size={20} /> : 'update'}
          clsName={clsx('button border-0 btn btn-lg mt-5', classes.authBtn)}
          onClick={onSubmit}
        />
      </div>
    )
}

export default ProfileForm
