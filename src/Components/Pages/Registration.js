import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Typography, Button } from '@mui/material';

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
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    mobilnumber: '',
    degignation: '',
    gender: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("formData", formData);
  };


  return (
    <>
      <div className="navbar">
        <Typography className="navigetiontitle" variant="h5">
          You Can Do Registration Here
        </Typography>
      </div>
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
    </>
  );
}

export default Registration;
