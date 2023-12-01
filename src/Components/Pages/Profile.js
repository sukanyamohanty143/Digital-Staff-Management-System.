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
import Notifications from './notifications';

const EmployeeProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: '',
    designation: '',
    joinDate: '',
    profilePhoto: null,
  });
  const [notificationCount, setNotificationCount] = useState(0);
  const [notificationMessage, setNotificationMessage] = useState('');
  const [allnotifications,setAllNotifications]=useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile({
      ...profile,
      [name]: value,
    });
    if (name === 'name') {
      const wordCount = value.split(/\s+/).filter((word) => word !== '').length;
      const message=`New update: ${value}`
      setNotificationCount(wordCount);
      setNotificationMessage(message);
      setAllNotifications((prevNotifications) => [...prevNotifications, message]);
    } else {
      const message=`New update: ${value}`
      setNotificationCount((prevCount) => prevCount + 1);
      setNotificationMessage(message);
      setAllNotifications((prevNotifications) => [...prevNotifications, message]);
    }
  };
  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    const imageURL = URL.createObjectURL(file);
    setProfile({
      ...profile,
      profilePhoto: imageURL,
    });
    const message='profile photo updated'
    setNotificationCount((prevCount)=>prevCount+1);
    setNotificationMessage(message);
    setAllNotifications((prevNotifications) => [...prevNotifications, message]);
  };
  
  const logProfileData = () => {
    const { name, designation, joinDate, profilePhoto } = profile;

    if (!name || !designation || !joinDate || !profilePhoto) {
      alert('Please fill in all the information');
    } else {
      // alert('Data saved successfully');
      const fullName = name.split(" ")
      const profileData = {
        firstname: fullName[0],
        lastname: fullName.length > 1 && fullName[1],
        designation: designation,
        joiningDate: joinDate,
        profilePhotoURL: profilePhoto,
      };
      const prevUser = JSON.parse(localStorage.getItem('user'))
      localStorage.setItem('user', JSON.stringify({ ...prevUser, ...profileData }))
      
      fetch(`http://localhost:8000/employees/${prevUser.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...profileData }),
      })
        .then((response) => {
          if (!response.ok) {
            if (response.status === 404) {
              throw new Error(`Resource not found for ID ${prevUser.id}`);
            } else {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
          }
          return response.json();
        })
        .then((data) => {
          console.log('Data updated:', data);
          setProfile({
            name: '',
            designation: '',
            joinDate: '',
            profilePhoto: null,
          });
          alert('Data saved successfully');
          navigate('/outer');
        })
        .catch((error) => {
          console.error('Error updating data:', error.message);
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
        <Notifications
          notificationCount={notificationCount}
          notificationMessage={notificationMessage}
          allNotifications={allnotifications}
        />
      </Paper>
    </Container>
  );
};
export default EmployeeProfile;