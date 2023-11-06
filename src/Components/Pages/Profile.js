import React, { useState } from 'react';
import {
  Container,
  TextField,
  Button,
  Grid,
  Paper,
  Typography,
  Avatar,
  
} from '@mui/material';

const EmployeeProfile = () => {
  const [profile, setProfile] = useState({
    name: '',
    fatherName: '',
    email: '',
    password: '',
    phone: '',
    joinDate: '',
    dob: '',
    profilePhoto: null,
    githubLink: '',
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
    setProfile({
      ...profile,
      profilePhoto: URL.createObjectURL(file),
    });
  };
//   console.log(profile,"dddd")

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', margin: '20px', maxWidth: '600px' }}>
        <Typography variant="h5" gutterBottom>
          Employee Profile
        </Typography>
        <form>
        <label htmlFor="profilePhoto">
                <Avatar src={profile.profilePhoto} alt="Profile" style={{ width: 80, height: 80 }} />PhotoUpload
              </label>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                label="Name"
                fullWidth
                name="name"
                value={profile.name}
                onChange={handleChange}
              />
            </Grid>
           
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                name="email"
                value={profile.email}
                onChange={handleChange}
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
              />
            </Grid>
            
            <Grid item xs={12} >
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
          <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
            Save Profile
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default EmployeeProfile;
