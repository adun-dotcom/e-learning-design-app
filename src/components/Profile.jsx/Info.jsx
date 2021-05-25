import React, {useState, useRef, useEffect} from 'react'
import { Avatar } from '@material-ui/core'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import {  useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ProfileForm from './ProfileForm'
import CameraAltIcon from '@material-ui/icons/CameraAlt'
import {instance} from '../../redux/api/config'
function InfoPg() {
 const [file, setFile] = useState('')
 const [filename, setFilename] = useState('choose file')
 const [uploadedFile, setUploadedFile] = useState('')
 const onChange = async e =>{
   setFile(e.target.files[0])
   setFilename(e.target.files[0].name)
   if(e.target.files[0])
   { 
     const formData = new FormData()
    formData.append('profile_pic', e.target.files[0])
    try {
      const res = await instance.post('/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      console.log(res.data)
      localStorage.setItem('profile-url', res?.data)
      setUploadedFile(`https://learn-design-0.herokuapp.com/${res.data}`)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }
 }
//  referencing the file type input
 const [click, setClick] = useState('')
const inputRef = useRef(null)
 useEffect(() => {
  setClick( inputRef.current.click())
 }, [])

//  
      const dispatch = useDispatch()
    const logout = () => {
      dispatch({ type: 'LOGOUT' })
      setUser(null)
      push('/')
    }
    const { push } = useHistory()
     const [user, setUser] = useState(
       JSON.parse(localStorage.getItem('profile'))
     )

    return (
      <div className="profile-flex ">
        <div className="profile-user">
          <div className="person-card">
            {uploadedFile ? (
              <Avatar
                alt={user.result.name}
                src={uploadedFile}
                // src={user.result.imageUrl}
                className="avatar"
              />
            ) : (
              <Avatar
                alt={user.result.name}
                src={user.result.imageUrl}
                className="avatar"
              />
            )}

            <p className="user-name">{user.result.name}</p>
            <p className="user-email">{user.result.email}</p>
            <div class="form-group">
              <label for="exampleFormControlFile1" className="profile-pic" onClick={click}>
                <CameraAltIcon />
              </label>
              <input
                style={{ display: 'none' }}
                type="file"
                ref={inputRef}
                className="form-control-file"
                id="exampleFormControlFile1"
                onChange={onChange}
              />
            </div>
          </div>
          <hr />
          <MenuItem onClick={logout}>
            <ListItemIcon>
              <ExitToAppIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              disableTypography
              primary={
                <Typography type="body2" className="">
                  Logout
                </Typography>
              }
            />
          </MenuItem>
        </div>
        <div className="profile-form">
          <ProfileForm />
        </div>
      </div>
    )
}

export default InfoPg
