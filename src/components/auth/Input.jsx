import React from 'react'
import {Grid, TextField, InputAdornment, IconButton} from '@material-ui/core'
import {Visibility, VisibilityOff} from '@material-ui/icons'

const InputComp = ({label, value, type, name, handleChange, handleClickShowPassword, handleMouseDownPassword}) => {
    return (
      <Grid item xs={12}>
        <TextField
        name= {name}
        onChange = {handleChange}
          required
          id="outlined-required"
          label={label}
          defaultValue={value}
          variant="outlined"
          type={type}
          fullWidth
        //   inputProps= {name === 'password' && {
        //     endAdornment=(
        //       <InputAdornment position="end">
        //         <IconButton
        //           aria-label="toggle password visibility"
        //           onClick={handleClickShowPassword}
        //           onMouseDown={handleMouseDownPassword}
        //           edge="end"
        //         >
        //           {type === 'password' ? <Visibility /> : <VisibilityOff />}
        //         </IconButton>
        //       </InputAdornment>)
        //     }
        // } 
        />
      </Grid>
    )
}

export default InputComp
