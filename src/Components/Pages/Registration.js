import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Typography, Button, Stack } from '@mui/material';

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
    gender: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (formData.name && formData.lastname && formData.mobilnumber && formData.degignation && formData.gender) {
      console.log('formData', formData);
      setSubmittedData(formData);
    } else {
      alert('Please fill out all required fields.');
    }
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
            helperText={!formData.name ? "Name is required" : "Enter your name"}
            error={!formData.name}
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
            error={!formData.lastname}
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
            error={!formData.mobilnumber}
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
            error={!formData.degignation}
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
            error={!formData.gender}
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
        <div className='container' style={{ textAlign: "center" }}>
          <Stack>
            <Typography>Name: {submittedData.name}</Typography>
            <Typography>lastname: {submittedData.lastname}</Typography>
            <Typography>mobilnumber: {submittedData.mobilnumber}</Typography>
            <Typography>degignation: {submittedData.degignation}</Typography>

            <Typography>gender: {submittedData.gender}</Typography>
          </Stack>
        </div>
      )}
    </>
  );
}


export default Registration;



