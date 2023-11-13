import React, { useState } from 'react';
import { Typography, Card, CardContent, CardMedia, Grid, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Outer = () => {
  const location = useLocation();
  const user = location.state.user;
  const navigate = useNavigate();
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // You can save the uploaded file in state or use it for other purposes
      setProfilePhoto(URL.createObjectURL(file));
    }
  };

  const viewAttendance = () => {
    navigate('/table', { state: { user: user.Name } });
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={4}>
        <Card xs={12} sm={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Profile of Employee</Typography>
          </Grid>
          <div
            style={{
              borderRadius: '50%',
              overflow: 'hidden',
              width: '200px',
              height: '200px',
              margin: '0 auto',
              border: '2px solid black',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            {profilePhoto ? (
              <CardMedia
                component="img"
                src={profilePhoto}
                alt="Employee Image"
                style={{ width: '100%', height: '100%' }}
              />
            ) : (
              <label htmlFor="profile-photo-upload">
                <input
                  type="file"
                  id="profile-photo-upload"
                  accept="image/*"
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
                <Button component="span">Upload Photo</Button>
              </label>
            )}
          </div>
          <CardContent>
            <Typography variant="h6">Name: {user.Name}</Typography>
            <Typography variant="h6">Email: {user.Email}</Typography>
            <Typography variant="h6">Password: {user.Password}</Typography>
            <Typography variant="h6">Date of Joining: {user.JoiningDate}</Typography>
            <Typography variant="h6">
              <Button onClick={viewAttendance} underline="hover">
                View your Attendance
              </Button>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Outer;
