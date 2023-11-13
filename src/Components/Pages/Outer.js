import React from 'react';
import { Typography, Card, CardContent, CardMedia, Grid, Button } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const Outer = () => {
  const location = useLocation();
  const user = location.state.user;
  const navigate = useNavigate();

  const viweAttendance = () => {
    navigate('/table', { state: { user: user.Name} });  }

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={4}>
        <Card xs={12} sm={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Profile of Employee</Typography>
          </Grid>
          <div style={{ borderRadius: '50%', overflow: 'hidden', width: '200px', height: '200px', margin: '0 auto', border: '2px solid black' }}>
            <CardMedia
              component="img"
              src={user.ProfilePhotoURL}
              alt="Employee Image"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <CardContent>
            <Typography variant="h6">Name: {user.Name}</Typography>
            <Typography variant="h6">Email: {user.Email}</Typography>
            <Typography variant="h6">Password: {user.Password}</Typography>
            <Typography variant="h6">Date of Joining: {user.JoiningDate}</Typography>
            <Typography variant="h6">          
              <Button onClick={viweAttendance} underline="hover">
              Viwe your Attendance
            </Button>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Outer;

