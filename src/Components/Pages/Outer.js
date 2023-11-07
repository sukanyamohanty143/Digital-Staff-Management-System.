import React from 'react';
import { Typography, Card, CardContent, CardMedia, Grid} from '@mui/material';

const Outer = () => {
  return (
    <Grid container spacing={3} justifyContent="center">
      
      <Grid item xs={4}>
        <Card xs={12} sm={4}>
        
      <Grid item xs={12}  >
        <Typography variant="h4">Profile of Employee</Typography>
      </Grid>
          <div style={{ borderRadius: '50%', overflow: 'hidden', width: '200px', height: '200px', margin: '0 auto', border: '2px solid black' }}>
            <CardMedia
              component="img"
              image="employee-image.jpg"
              alt="Employee Image"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <CardContent>
            <Typography variant="h6">Name: John Doe</Typography>
            <Typography variant="h6">Email: john.doe@example.com</Typography>
            <Typography variant="h6">Password: ********</Typography>
            <Typography variant="h6">Date of Joining: 2023-11-06</Typography>
            <Typography variant="h6">Attendance: Present</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Outer;
