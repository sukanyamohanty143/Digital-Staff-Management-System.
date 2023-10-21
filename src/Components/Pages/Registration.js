import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Typography, Button, AppBar } from '@mui/material';

const data = [
  {
    value: 'admin',
    position: 'Admin',
  },
  {
    value: 'superwisor',
    position: 'Superwisor',
  },
  {
    value: 'staff',
    position: 'Staff',
  },
];

const genderData = [
  {
    value: 'male',
    gender: 'Male',
  },
  {
    value: 'female',
    gender: 'Female',
  },
];

function Registration() {
  const [submittedData, setSubmittedData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    mobilnumber: '',
    degignation: '',
    gender: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (formData.name && formData.lastname && formData.mobilnumber && formData.degignation && formData.gender) {

      // add user data in data-server.jso file.
      fetch('http://localhost:3000/employees', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Data added:', data);
        })
        .catch(error => {
          console.error('Error adding data:', error);
        });

      console.log('formData =', formData);


      setSubmittedData(formData);
      setFormData({
        name: '',
        lastname: '',
        mobilnumber: '',
        degignation: '',
        gender: ''
      })
    } else {
      alert('You have to fill all required.');
    }
  };

  return (
    <>
      <AppBar position="static" style={{ padding: "20px", height: "75px" }}>
        <Typography variant="h6" color="inherit" component="div">
          You Can Registration Here
        </Typography>
      </AppBar>
      <Typography variant="h4" style={{ textAlign: 'center', margin: '15px' }}>
        Registration Form
      </Typography>

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2, width: '70ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="formcontainer">
          <TextField
            id="name"
            name="name"
            label="Name"
            variant="standard"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            helperText={!formData.name ? "Name is required" : "Enter your name"}
          />
          <br />

          <TextField
            id="lastname"
            name="lastname"
            label="Last Name"
            variant="standard"
            placeholder="Enter your last name"
            value={formData.lastname}
            onChange={handleChange}
            helperText={!formData.lastname ? "Last name is required" : "Enter your last name"}
          />
          <br />

          <TextField
            id="mobilnumber"
            name="mobilnumber"
            label="Mobile Number"
            variant="standard"
            placeholder="Enter your mobile number"
            value={formData.mobilnumber}
            onChange={handleChange}
            helperText={!formData.mobilnumber ? "Mobilnumber is required" : "Enter your mobil number"}
          />
          <br />

          <TextField
            id="degignation"
            name="degignation"
            select
            label="Select Designation"
            variant="standard"
            value={formData.degignation}
            onChange={handleChange}
            helperText={!formData.degignation ? "Degignation is required" : "Enter your degignation"}
          >
            {data.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.position}
              </MenuItem>
            ))}
          </TextField>
          <br />

          <TextField
            id="gender"
            name="gender"
            select
            label="Select Gender"
            variant="standard"
            value={formData.gender}
            onChange={handleChange}
            helperText={!formData.gender ? "Gender is required" : "Enter your gender"}
          >
            {genderData.map((selectgender) => (
              <MenuItem key={selectgender.value} value={selectgender.value}>
                {selectgender.gender}
              </MenuItem>
            ))}
          </TextField>
          <br />

          <Button className="submitbtn" variant="contained" onClick={handleSubmit}>
            Submit Button
          </Button>

        </div>
      </Box>

      {submittedData && (
        <div className='container' style={{ textAlign: "center" }}></div>
      )}

    </>
  );
}
export default Registration;







