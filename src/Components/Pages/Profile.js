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
    const { name, email, password, joinDate, profilePhoto } = profile;

    if (!name || !email || !password || !joinDate || !profilePhoto) {
      alert('Please fill in all the information');
    } else {
      alert('Data saved successfully');
      const fullName = name.split(" ")
      const profileData = {
        firstname: fullName[0],
        lastname:fullName.length>1 && fullName[1],
        email: email,
        password: password,
        joiningDate: joinDate,
        profilePhotoURL: profilePhoto,
      };
      const prevUser = JSON.parse(localStorage.getItem('user'))
      localStorage.setItem('user',JSON.stringify({...prevUser,...profileData}))
      function _objectWithoutProperties(obj, keys) {
        var target = {};
        for (var i in obj) {
          if (keys.indexOf(i) >= 0) continue;
          if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
          target[i] = obj[i];
        }
        return target;
      }
      
      
      
      var removeId = _objectWithoutProperties(prevUser, ["id"]);
      console.log("removeId", profileData);

      fetch(`http://localhost:8000/employees?id=${prevUser.id}`, {
        method: 'PUT',
        headers: {

          'Content-Type': 'application/json',
        },
        body: JSON.stringify({...removeId,...profileData}),
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
          });
          navigate('/outer');
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
                label="Email"
                fullWidth
                name="email"
                value={profile.email}
                onChange={handleChange}
                autoComplete="off"
                helperText={
                  !profile.email
                    ? 'Email is required'
                    : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(profile.email)
                    ? <span style={{ color: 'red' }}>Enter a valid email</span>
                    : profile.email !== profile.email.toLowerCase()
                    ? <span style={{ color: 'red' }}>Email should be in lowercase</span>
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
                autoComplete="off"
                helperText={
                  !profile.password
                    ? 'Password is required'
                    : profile.password.length < 8
                    ? <span style={{ color: 'red' }}>Password should be at least 8 characters long</span>
                    : !/\d/.test(profile.password)
                    ? <span style={{ color: 'red' }}>Password should contain at least one digit</span>
                    : !/[A-Z]/.test(profile.password)
                    ? <span style={{ color: 'red' }}>Password should contain at least one uppercase letter</span>
                    : !/[a-z]/.test(profile.password)
                    ? <span style={{ color: 'red' }}>Password should contain at least one lowercase letter</span>
                    : !/[!@#$%^&*(),.?":{}|<>]/.test(profile.password)
                    ? <span style={{ color: 'red' }}>Password should contain at least one special character</span>
                    : 'Password is strong'
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
