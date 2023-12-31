import EditIcon from '@mui/icons-material/Edit';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, Card, CardContent, CardMedia, Grid, Button, IconButton } from '@mui/material';

function Outer() {
  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate();
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
    }
  };
  const viewAttendance = () => {
    navigate('/table');
  };

  const handleEditClick = () => {
    navigate('/profile', { state: { user } });
  };
  return (
    <>

      <Card
 
        style={{ backgroundColor: "white" ,border:"2px solid gray"}}
        sx={{
          height: "400px",
          margin: "auto",
          padding: "20px",
          marginTop: "100px",
          width: {
            sm: "50%",
            md: "50%",
            lg: "33.33%",
            xl: "32%",
          },
          "@media (max-width: 600px)": {
            height: "800px", 
          },
        }}

      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h4" style={{ textAlign: "center" }}>
              Profile of Employee
              <EditIcon sx={{ marginLeft: '10px' }} onClick={handleEditClick} />
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={6} >
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
              {profilePhoto || user.profilePhotoURL ? (
                <CardMedia
                  component="img"
                  src={profilePhoto || user.profilePhotoURL}
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

            <Button onClick={viewAttendance} underline="hover" style={{ marginTop: "30px" }}>
              View your Attendance
            </Button>
          </Grid>

          <Grid item xs={12} sm={12} md={6} >
            <Grid xs={12} sm={12} md={6}>
              <CardContent style={{ marginTop: "30px" }}>
                <Typography style={{ padding: "5px" }} variant="h6">{user.firstname + " " + user.lastname}</Typography>
                <Typography style={{ padding: "5px" }} variant="h6">{user.email}</Typography>
                <Typography style={{ padding: "5px" }} variant="h6">{user.mobilenumber}</Typography>
                <Typography style={{ padding: "5px" }} variant="h6">{user.designation}</Typography>
                <Typography style={{ padding: "5px" }} variant="h6">{user.role}</Typography>
                <Typography style={{ padding: "5px" }} variant="h6">{user.JoiningDate}</Typography>
                <Typography style={{ padding: "10px" }} variant="h6">
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
        </Grid>
      </Card>

    </>
  )
}
export default Outer;
















































