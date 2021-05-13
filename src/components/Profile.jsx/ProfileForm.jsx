import React, {useState} from 'react'
import useStyles from '../auth/style'
import ClipLoader from 'react-spinners/ClipLoader'
import clsx from 'clsx'
import {
  TextField,
} from '@material-ui/core'
import MyButton from '../button'

function ProfileForm() {
    const classes = useStyles()
     const [loading, setLoading] = useState(false)
    const [values, setValues] = useState({
      firstname: '',
      lastname: '',
      email:''
    })
    const handleChange = (e) => {
      setValues({ ...values, [e.target.name]: e.target.value })
    }
    const onSubmit = (e) => {
      e.preventDefault()
    }
    return (
      <div>
        <TextField
          id="outlined-multiline-flexible"
          className={classes.textField}
          label="firstName"
          name="firstname"
          multiline
          rowsMax={4}
          value={values.email}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          className={classes.textField}
          label="lastName"
          name="lastname"
          multiline
          rowsMax={4}
          value={values.email}
          onChange={handleChange}
          variant="outlined"
        />
        <TextField
          id="outlined-multiline-flexible"
          className={classes.textField}
          label="Email Address"
          name="email"
          multiline
          rowsMax={4}
          value={values.email}
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