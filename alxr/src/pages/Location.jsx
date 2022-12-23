import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../styles/Location.css"
import { Navigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';

export const Location = () => {


  return (
    <div>
    <Navbar/>
    <div id='location_box'>
     
      <h2>Location</h2>
        <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      
    >
           <TextField id="filled-basic" label="Start Point" variant="filled" />
           <TextField id="filled-basic" label="End Point" variant="filled" />
           <Button variant="variant">Submit</Button>

    </Box>
    
    
    </div>
    </div>
  )
}
