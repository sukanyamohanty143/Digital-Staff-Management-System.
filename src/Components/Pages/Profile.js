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

  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', margin: '20px', maxWidth: '600px' }}>
        <Typography variant="h5" gutterBottom>
          Employee Profile
        </Typography>
        <form>
          <label htmlFor="profilePhoto">
            <Avatar src={profile.profilePhoto} alt="Profile" style={{ width: 80, height: 80 }} />Photo Upload
          </label>
          <Grid container spacing={2}>
            <Grid item xs={12}>
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

        {profile.profilePhoto && (
            <div>
              <Typography variant="h6"></Typography>
              <img src={profile.profilePhoto} alt="Uploaded" style={{ maxWidth: '100%' }} />
            </div>
          )}
        <div>
          <Typography variant="h6">Entered Data:</Typography>
          <ul>
            <li>Name: {profile.name}</li>
            <li>Email: {profile.email}</li>
            <li>Password: {profile.password}</li>
            <li>Joining Date: {profile.joinDate}</li>
          </ul>
       
        </div>
      </Paper>
    </Container>
  );
};

export default EmployeeProfile;
