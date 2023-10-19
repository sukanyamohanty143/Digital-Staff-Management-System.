import React, {useState} from 'react'
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  MenuItem,
  Button,
  Typography, Link
} from "@mui/material"
import PersonIcon from '@mui/icons-material/Person';



function Login() {
  const [ userName, setUserName ] = useState("")
  const [ role, setRole ] = useState("")

  const paperStyle = {
    padding: 20,
    height: "60vh",
    width: 280,
    margin: "20px auto"
  }

  const dropdownStyle = {
    margin: "20px auto"
  }

  const buttonStyle = {
    margin: "20px auto"
  }

  const gridStyle = {
    height: "100vh",
    backgroundColor: '#9900cc'
  }

  const avatarStyle = {backgroundColor: '#1bbd7e'}

  const handelClick = () => {

  }

  return (
    <Grid style={gridStyle}>
      <Paper elevation={10} style={paperStyle}>

        <Grid align="center" margin="30px">
          <Avatar style={avatarStyle}><PersonIcon /></Avatar>
          <h2>Sign In</h2>
        </Grid>

        <TextField label="Username" placeholder='Enter username' fullWidth required />

        <TextField label="Select role" style={dropdownStyle} select fullWidth>
          <MenuItem value="Staff">Staff</MenuItem>
          <MenuItem value="Admin">Admin</MenuItem>
          <MenuItem value="Supervisor">Supervisor</MenuItem>
        </TextField>

        <Typography>
          Do you have an account ?
          <Link href="#" underline="hover">
            Sign Up
          </Link>
        </Typography>

        <Button 
          variant="contained" 
          style={buttonStyle} 
          onClick={handelClick}
          fullWidth 
          disabled>
            Sign In
        </Button>

      </Paper>
    </Grid>
  )
}

export default Login