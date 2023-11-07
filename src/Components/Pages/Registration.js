
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Typography, Button, Card, CardContent } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

// data variable store position like (staff,supervoiser,admin)
const data = [
  {
    value: 'Admin',
    position: 'Admin',
  },
  {
    value: 'Supervisor',
    position: 'Supervisor',
  },
  {
    value: 'Staff',
    position: 'Staff',
  },
];
// this state for select gender.
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
  // here useNevigate use from react router dom.used for routing(if i click on button then open a new page)
  const navigate = useNavigate();
  const goToLogin = () => { 
    navigate("/login")
  }

  // submittedData state when i click on submit button  data it will send all data in submitted 
  const [submittedData, setSubmittedData] = useState(null);

  // formData store all user informetion.(firsname,lastname etc)
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    mobilenumber: '',
    designation: '',
    gender: ''
  });
  console.log("formData:", formData);

// handleChange -In this function has to 
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = () => {
    // i put condition for vailidation.and post data in json server using post method in promisses.
    if (formData.firstname && formData.lastname && formData.mobilenumber && formData.designation && formData.gender) {
      fetch('http://localhost:8000/employees', {
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
      setSubmittedData(formData);

      setFormData({
        firstname: '',
        lastname: '',
        mobilenumber: '',
        designation: '',
        gender: '',
        email: '',
        password: ''
      })
      goToLogin()
    }
    else{
      alert("fill all require Feild")
    }
  };

  return (
    <>
      <Card className='registretion-card'>
        <CardContent>
          <Box style={{ textAlign: 'center', margin: '15px' }}>
            <PeopleAltIcon />
            <Typography variant='h5'>Registration Form</Typography>
          </Box>

          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': {m:0.5, width: '55ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="formcontainer">
              <TextField
                name="firstname"
                label="First Name"
                variant="standard"
                value={formData.firstname}
                onChange={handleChange}
                helperText={!formData.firstname ? "Name is required" : "Enter your name"}
              />
              <br />


              <TextField
                name="lastname"
                label="Last Name"
                variant="standard"
                value={formData.lastname}
                onChange={handleChange}
                helperText={!formData.lastname ? "Last name is required" : "Enter your last name"}
              />
              <br />

              <TextField
                name="email"
                label="Email"
                variant="standard"
                value={formData.email}
                onChange={handleChange}
                helperText={!formData.email ? "email is required" : "Enter your email"}
              />
              <br />

              <TextField
                name="password"
                label="Password"
                variant="standard"
                value={formData.password}
                onChange={handleChange}
                helperText={!formData.password ? "password is required" : "Enter your password"}
              />
              <br />

              <TextField
                name="mobilenumber"
                label="Mobile Number"
                variant="standard"
                value={formData.mobilenumber}
                onChange={handleChange}
                helperText={!formData.mobilenumber ? "mobilenumber is required" : "Enter your mobilenumber"}
              />
              <br />

              <TextField
                name="designation"
                select
                label="Select Designation"
                variant="standard"
                value={formData.designation}
                onChange={handleChange}
                helperText={!formData.designation ? "Designation is required" : "Enter your designation"}
              >
                {data.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.position}
                  </MenuItem>
                ))}
              </TextField>
              <br />

              <TextField
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

              <Button submittedData={submittedData} className="submitbtn" variant="contained" onClick={handleSubmit}>
                Submit Button
              </Button>
            </div>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
export default Registration;




