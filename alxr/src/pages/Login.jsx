// import React from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Loging_in } from '../redux/action';
import "../styles/Login.css"

export const Login = () => {


/* State to store the Email and Password Details */
  const [state,setstate]=React.useState({
    email:"",
    password:""
})


const dispatch=useDispatch()


/*Getting token from the Redux store using useSelector*/ 
const {token}=useSelector(state=>state)


/*Funtion to change the input value of input field*/ 
const handleChange=(e)=>{
    const {name,value}=e.target
    setstate(prev=>({...prev,[name]:value}))
}


/*Dispatching the Email and Password Details to action.js*/ 
const handleLogin=(payload)=>{
    dispatch(Loging_in(payload))
  }

/*After submiting the Login Details, If it succeed then we get a token and then we can move to our Home Page*/ 
if(token){
    return <Navigate to="/" />
}

  return (
    <div id='container'>
      <h3>Log In</h3>

      {/* Log In Input Fields */}
      
     <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Email" variant="outlined" type={"email"}  name='email' value={state.email} onChange={handleChange}/>
      <TextField id="outlined-basic" label="Password" variant="outlined" type={"password"}  name='password' value={state.password} onChange={handleChange} />
      <Button variant="contained" onClick={()=>{handleLogin(state)}}>Log In</Button>
    </Box>
  </div>
  )
}
