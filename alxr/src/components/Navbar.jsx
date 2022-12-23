import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { LogOut_success } from '../redux/action';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';



export const Navbar = () => {

  const dispatch=useDispatch()

/* function to handle the logout from the page*/

    const handleLogOut=()=>{
        dispatch(LogOut_success())
      }


    
  return (
    <div>
      <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="medium"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" style={{color:"white",textDecoration:"none"}}>Category</Link>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/location" style={{color:"white",textDecoration:"none"}}>Location</Link>
          </Typography>
          <Button color="inherit" sx={{backgroundColor:"purple"}} onClick={handleLogOut}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}
