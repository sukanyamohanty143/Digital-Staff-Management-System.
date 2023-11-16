import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Avatar,
  IconButton,
} from '@mui/material';
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { useNavigate } from 'react-router-dom';


const EmployeeProfile = (props) => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
    joinDate: '',
    profilePhoto: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setProfile({
      ...profile,
      profilePhoto: imageURL,
    });
  };

  const logProfileData = () => {
    const profileData = {
      Name: profile.name,
      Email: profile.email,
      Password: profile.password,
      JoiningDate: profile.joinDate,
      ProfilePhotoURL: profile.profilePhoto,
    };
    fetch(`http://localhost:8000/EmployeeProfile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profileData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Data added:', data);
        setProfile({
          name: '',
          email: '',
          password: '',
          joinDate: '',
          profilePhoto: null,
        })
        navigate('/outer', { state: { user: profileData } });
      })
      .catch((error) => {
        console.error('Error adding data:', error);
      });
  };

  return (
    <Container style={{ marginTop: "70px" }}>
      <Paper elevation={3} style={{ padding: '20px', margin: '20px', maxWidth: '600px' }}>
        <Typography variant="h5" gutterBottom>
          Employee Profile
        </Typography>
        <form>
          <label htmlFor="profilePhoto">
            <Avatar src={profile.profilePhoto} alt="Profile" style={{ width: 80, height: 80 }}>
              <IconButton
                color="primary"
                component="span"
                style={{
                  position: 'absolute',
                  bottom: '50%',
                  right: '50%',
                  transform: 'translate(50%, 50%)',
                }}
              >
                <PhotoCameraIcon />
              </IconButton>
            </Avatar>
          </label>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Name"
                fullWidth
                name="name"
                value={profile.name}
                onChange={handleChange}
                margin="normal"

                helperText={
                  !profile.name
                    ? "Name is required"
                    : !/^[a-zA-Z\s]*$/.test(profile.name)
                      ? <span style={{ color: 'red' }}>Name should not contain numbers</span>
                      : "Enter your name"
                }

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                name="email"
                value={profile.email}
                onChange={handleChange}
                margin="normal"
                helperText={
                  !profile.email
                    ? 'Email is required'
                    : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)
                      ? <span style={{ color: "red" }}>Enter a valid email</span>
                      : profile.email !== profile.email.toLowerCase()
                        ? <span style={{ color: "red" }}>Email should be in lowercase</span>
                        : ''
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                fullWidth
                name="password"
                value={profile.password}
                onChange={handleChange}
                margin="normal"

                helperText={
                  !profile.password
                    ? 'Password is required'
                    : profile.password.length < 8
                      ? <span style={{ color: "red" }}>Password should be at least 8 characters long</span>
                      : !/\d/.test(profile.password)
                        ? <span style={{ color: "red" }}>Password should contain at least one digit</span>
                        : !/[A-Z]/.test(profile.password)
                          ? <span style={{ color: "red" }}>Password should contain at least one uppercase letter</span>
                          : !/[a-z]/.test(profile.password)
                            ? <span style={{ color: "red" }}>Password should contain at least one lowercase letter</span>
                            : !/[!@#$%^&*(),.?":{}|<>]/.test(profile.password)
                              ? <span style={{ color: "red" }}>Password should contain at least one special character</span>
                              : "Password is strong"
                }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Joining Date"
                type="date"
                fullWidth
                name="joinDate"
                value={profile.joinDate}
                onChange={handleChange}
                InputLabelProps={{
                  shrink: true,
                }}
                margin="normal"
              />
            </Grid>
            <Grid item xs={12}>
              <input
                accept="image/*"
                style={{ display: 'none' }}
                id="profilePhoto"
                type="file"
                onChange={handlePhotoChange}
              />
            </Grid>
          </Grid>
          <Button variant="contained" color="primary" style={{ marginTop: '20px' }} onClick={logProfileData}>
            Save Profile
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default EmployeeProfile;