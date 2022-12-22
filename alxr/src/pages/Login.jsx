// import React from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import "../styles/Login.css"

export const Login = () => {
  return (
    <div id='container'>
        <h3>Log In</h3>
     
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Email" variant="outlined" type={"email"}/>
      <TextField id="outlined-basic" label="Password" variant="outlined" type={"password"} />
      <Button variant="contained">Log In</Button>

      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}
    </Box>
  
    </div>
  )
}
