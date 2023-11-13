import React, { useState, useEffect } from 'react';
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography
} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup, 
  onAuthStateChanged } from 'firebase/auth';
import { app } from '../Pages/Context/firebase'

const auth = getAuth(app);


function Login() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/employees")
      .then((res) => res.json())
      .then((res) => setUserData(res))
      .catch((err) => console.log(err));
  }, []);

  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 350,
    margin: "20px auto",
  };

  const dropdownStyle = {
    margin: "20px auto",
  };

  const buttonStyle = {
    margin: "20px auto",
  };

  const avatarStyle = { backgroundColor: "#1bbd7e" };

  const handleClick = () => {
    const foundUsers = userData.filter((user) => {
      if (user.email === userEmail && user.password === userPassword) {
        signInWithEmailAndPassword(auth, userEmail, userPassword)
          .then((vlu) => navigate(`/${user.designation}`));
      }
    });
  };

  const handleGoogleSignIn = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    try {
      const result = await signInWithPopup(auth, provider);

      onAuthStateChanged(auth, (user) => {
        if (user) {
          const isUserInDatabase = userData.some((dbUser) => dbUser.email === user.email);
          if (isUserInDatabase) {
            navigate(`/${user.designation}`);
          } else {
            console.log("User not in the database. Redirect to registration or handle accordingly.");
          }
        }
      });
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  const goToRegistration = () => {
    navigate("/registration");
  };


  return (
    <Grid style={{ marginTop: "70px" }}>
      <Paper elevation={10} style={paperStyle}>

        <Grid align="center" margin="30px">
          <Avatar style={avatarStyle}><PersonIcon /></Avatar>
          <h2>Sign In</h2>
        </Grid>

        <TextField
          label="Email ID"
          placeholder='Enter email'
          value={userEmail}
          onChange={(e) => { setUserEmail(e.target.value) }}
          fullWidth required />

        <TextField
          label="Password"
          style={dropdownStyle}
          value={userPassword}
          type='password'
          onChange={(e) => { setUserPassword(e.target.value) }}
          fullWidth required />

        <Typography>
          <Button variant="contained" style={buttonStyle} onClick={handleGoogleSignIn} fullWidth>
            Sign In with Google
          </Button>
        </Typography>

        <Typography>
          Do you have an account ?
          <Button onClick={goToRegistration} underline="hover">
            Create account
          </Button>
        </Typography>

        <Button
          variant="contained"
          style={buttonStyle}
          onClick={handleClick}
          fullWidth
          disabled={!userEmail || !userPassword}>
          Sign In
        </Button>

      </Paper>
    </Grid>
  )
}

export default Login;
