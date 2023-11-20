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

const EmployeeProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: '',
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
    const { name, joinDate, profilePhoto } = profile;

    if (!name || !joinDate || !profilePhoto) {
      alert('Please fill in all the information');
    } else {
      alert('Data saved successfully');

      const profileData = {
        Name: name,
        JoiningDate: joinDate,
        ProfilePhotoURL: profilePhoto,
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
            joinDate: '',
            profilePhoto: null,
          });
          navigate('/outer', { state: { user: profileData } });
        })
        .catch((error) => {
          console.error('Error adding data:', error);
        });
    }
  };

  return (
    <Container style={{ marginTop: '10px' }}>
      <Paper elevation={1} style={{ padding: '10px', margin: 'auto', maxWidth: '600px' }}>
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
                autoComplete="off"
                helperText={
                  !profile.name
                    ? 'Name is required'
                    : !/^[a-zA-Z\s]*$/.test(profile.name)
                      ? <span style={{ color: 'red' }}>Only alphabets and spaces are allowed</span>
                      : 'Enter your name'
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
          <Button variant="contained" color="primary" style={{ marginTop: '0px' }} onClick={logProfileData}>
            Save Profile
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default EmployeeProfile;
