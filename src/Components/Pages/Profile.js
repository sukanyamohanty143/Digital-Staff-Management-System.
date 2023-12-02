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
  MenuItem,
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
      const fullName = name.split(" ")
      const profileData = {
        firstname: fullName[0],
        lastname:fullName.length>1 && fullName[1],
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
    <Container style={{ marginTop: '100px' }}>
      <Paper elevation={1} style={{ padding: '40px', margin: 'auto', maxWidth: '600px' }}>
        <Typography variant='h4' style={{textAlign:"center"}}> Employee Profile </Typography>
        <form>
          <label htmlFor="profilePhoto" style={{marginTop: '40px'}}>
            <Avatar src={profile.profilePhoto} alt="Profile" style={{ width: 80, height: 80 ,marginTop:"20"}}>
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
          <br></br>
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
              label="Designation"
              fullWidth
              select
              value={profile.designation}
              onChange={handleChange}
              name="designation"
              helperText="Select your designation"
            >
              <MenuItem value="staff">Staff</MenuItem>
              <MenuItem value="supervisor">Supervisor</MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
            </TextField>
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