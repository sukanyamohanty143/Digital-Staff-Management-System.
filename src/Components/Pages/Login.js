import React, { useState, useEffect } from 'react';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  MenuItem,
  Button,
  Typography,
  Link
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';


function Login() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [userDesignation, setUserDesignation] = useState("");
  const [userData, setUserData] = useState([])

 
  useEffect(()=>{
    fetch("http://localhost:8000/employees").then((res)=>{
      return res.json()

    }).then((res)=>{
      setUserData(res)
    })
    .catch((err)=> console.log(err))
  },[])
  

  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 350,
    margin: "20px auto"
  };

  const dropdownStyle = {
    margin: "20px auto"
  };

  const buttonStyle = {
    margin: "20px auto"
  };

  const avatarStyle = { backgroundColor: '#1bbd7e' };
  
  const handleClick = () => {

    const foundUsers = userData.filter((user) => {
      return (
        user.name.toLowerCase().trim() === userName.toLowerCase().trim() &&
        user.designation.toLowerCase() === userDesignation.toLowerCase()
        
      );
    });
    if (foundUsers.length > 0) {

      let designation = foundUsers[0].designation 
      console.log(designation,"user role")
      
      if (designation.toLowerCase() === 'staff') {
        navigate('/staff');
      } else if (designation.toLowerCase() === 'admin') {
        navigate('/admin');
      } else if (designation.toLowerCase() === 'supervisor') {
        navigate('/supervisor');
      } else {    
        navigate('/');
      }
    
    } else {
      console.log("User not found or credentials are incorrect");
    }
  }
  

  return (
    <Grid style={{ marginTop: "70px" }}>
      <Paper elevation={10} style={paperStyle}>

        <Grid align="center" margin="30px">
          <Avatar style={avatarStyle}><PersonIcon /></Avatar>
          <h2>Sign In</h2>
        </Grid>

        <TextField 
          label="Username" 
          placeholder='Enter username' 
          value={userName} 
          onChange={(e) => { setUserName(e.target.value) }} 
          fullWidth required />

        <TextField 
          label="Select designation" 
          style={dropdownStyle} 
          value={userDesignation} 
          onChange={(e) => { setUserDesignation(e.target.value) }} 
          select fullWidth>
          <MenuItem value="Staff">Staff</MenuItem>
          <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="Supervisor">Supervisor</MenuItem>
        </TextField>

        <Typography>
          Do you have an account ?
          <Link to="/ragistration" underline="hover">
            Sign Up
          </Link>
        </Typography>

        <Button
          variant="contained"
          style={buttonStyle}
          onClick={handleClick}
          fullWidth
          disabled={!userName || !userDesignation}>
          Sign In
        </Button>

      </Paper>
    </Grid>
  )
}

export default Login;
