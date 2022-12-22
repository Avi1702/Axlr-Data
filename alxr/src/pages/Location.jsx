import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "../styles/Location.css"

export const Location = () => {
  return (
    <div id='location_box'>
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
  )
}
