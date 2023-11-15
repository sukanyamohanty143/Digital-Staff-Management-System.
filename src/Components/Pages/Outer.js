
import React, { useState } from 'react';
import { Typography, Card, CardContent, CardMedia, Grid, Button, IconButton } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import EditIcon from '@mui/icons-material/Edit';

const Outer = () => {
  const location = useLocation();
  const user = location.state.user;
  const navigate = useNavigate();
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
    }
  };

  const viewAttendance = () => {
    navigate('/table', { state: { user: user.Name } });
  };

  const handleEditClick = () => {
    navigate('/profile', { state: { user } });
  };

  return (

    <>
      <Card className='card' style={{ width: "600px", padding: "20px", boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)' }}>

        <Grid item xs={12}>
          <Typography variant="h4" style={{ textAlign: "center" }}>Profile of Employee
            <EditIcon sx={{ marginLeft: '80px'}} onClick={handleEditClick} />
          </Typography>
        </Grid>

        <CardContent style={{marginTop:"30px" }}>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <div
                style={{
                  borderRadius: '8px',
                  overflow: 'hidden',
                  width: '200px',
                  height: '200px',
                  marginTop: "30px",
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

              <Button onClick={viewAttendance} underline="hover" style={{marginTop:"30px"}}>
                View your Attendance
              </Button>
            </Grid>

            <Grid xs={6}>
              <CardContent style={{marginTop:"30px" }}>
                <Typography style={{padding:"5px" }} variant="h6">Name: {user.Name}</Typography>
                <Typography style={{padding:"5px" }} variant="h6">Email: {user.Email}</Typography>
                <Typography style={{padding:"5px" }} variant="h6">Password: {user.Password}</Typography>
                <Typography style={{padding:"5px" }} variant="h6">Date of Joining: {user.JoiningDate}</Typography>
                <Typography style={{padding:"10px" }} variant="h6">
                  <IconButton
                    color="primary"
                    aria-label="edit"
                    component="span"
                    onClick={handleEditClick}
                  >

                  </IconButton>
                </Typography>
              </CardContent>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
};

export default Outer;
