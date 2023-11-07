import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Typography, Button, Card, CardContent } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {app} from '../Pages/Context/firebase'

const auth = getAuth(app);
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
  const navigate = useNavigate();
  const [submittedData, setSubmittedData] = useState(null);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    mobilenumber: '',
    designation: '',
    gender: '',
    email: '',
    password: ''
  });
  console.log("formData", formData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {

    if (formData.firstname && formData.lastname && formData.mobilenumber && formData.designation && formData.gender) {
      createUserWithEmailAndPassword (auth, formData.email, formData.password).then( vlu => alert("Sign up Done"))

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
      // console.log('formData =', formData);
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

    } else {
      const goToLogin = () => {
        navigate("/login")
      }
      goToLogin()
    }


  };

  return (
    <>
      <Card className='registretion-card'>
        <CardContent>
          <Typography variant="h4" style={{ textAlign: 'center', margin: '15px' }}>
            <PeopleAltIcon />
            <Typography variant='h5'>Registration Form</Typography>
          </Typography>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '60ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="formcontainer">
              <TextField
                id="name"
                name="firstname"
                label="First Name"
                variant="standard"
                placeholder="Enter your name"
                value={formData.firstname}
                onChange={handleChange}
                helperText={!formData.firstname ? "Name is required" : "Enter your name"}
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
                id="email"
                name="email"
                label="Email"
                variant="standard"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                helperText={!formData.email ? "email is required" : "Enter your email"}
              />
              <br />



              <TextField
                id="password"
                name="password"
                label="Password"
                variant="standard"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                helperText={!formData.password ? "password is required" : "Enter your password"}
              />
              <br />

              <TextField
                id="mobilnumber"
                name="mobilenumber"
                label="Mobile Number"
                variant="standard"
                placeholder="Enter your mobile number"
                value={formData.mobilenumber}
                onChange={handleChange}
                helperText={!formData.mobilenumber ? "mobilenumber is required" : "Enter your mobilenumber"}
              />
              <br />

              <TextField
                id="designation"
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
        </CardContent>
      </Card>
    </>
  );
}
export default Registration;













