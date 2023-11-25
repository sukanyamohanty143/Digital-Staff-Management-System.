import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Typography, Button, Card, CardContent } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../Pages/Context/firebase'

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';


const auth = getAuth(app);
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

function Registration(props) {
  console.log("props", props)
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location)
  const designation = location?.state?.designation || '';
  console.log("Designation in Registration component:", designation);
  const goToLogin = () => {
    navigate("/login")
  }
  // const { location } = props;
  // const designation = location?.state?.designation || '';
  // console.log("Designation in Registration component:", designation);

  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [submittedData, setSubmittedData] = useState(null);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    gender: '',
    mobilenumber: '',
    email: '',
    password: '',
    designation: designation,
  });
  console.log("formData", formData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value })
  };

  const handleSubmit = () => {
    if (formData.firstname && formData.lastname && formData.gender && formData.mobilenumber && formData.email && formData.password) {
      createUserWithEmailAndPassword(auth, formData.email, formData.password).then(vlu => alert("Sign up Done"))

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
        gender: '',
        email: '',
        password: '',
        mobilenumber: ''
      })
      goToLogin()

    } else {
      alert("fill all required")
    }
  };

  return (
    <>

      <Card className='registretion-card' style={{ boxShadow: '0 10px 15px rgba(0, 0, 0, 0.2)' }}>
        <CardContent>
          <Box style={{ textAlign: 'center', margin: '15px' }}>
            <PeopleAltIcon />
            <Typography variant='h5'>Registration Form</Typography>
          </Box>

          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '55ch' },
            }}
            noValidate
            autoComplete="off"
          >

            <div className="formcontainer">

              <TextField
                name="firstname"
                label="First Name"
                variant="standard"
                placeholder="Enter your name"
                value={formData.firstname}
                onChange={handleChange}
                helperText={
                  !formData.firstname
                    ? "Name is required"
                    : !/^[a-zA-Z\s]*$/.test(formData.firstname)
                      ? <span style={{ color: 'red' }}>Name should not contain numbers</span>
                      : "Enter your name"
                }
              />

              <TextField
                name="lastname"
                label="Lirst Name"
                variant="standard"
                placeholder="Enter your lastname"
                value={formData.lastname}
                onChange={handleChange}
                helperText={
                  !formData.lastname
                    ? "Last Name is required"
                    : !/^[a-zA-Z\s]*$/.test(formData.lastname)
                      ? <span style={{ color: 'red' }}>Last Name should not contain numbers</span>
                      : "Enter your lastname"
                }
              />

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

              <TextField
                name="email"
                label="Email"
                variant="standard"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                helperText={
                  !formData.email
                    ? 'Email is required'
                    : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
                      ? <span style={{ color: "red" }}>Enter a valid email</span>
                      : formData.email !== formData.email.toLowerCase()
                        ? <span style={{ color: "red" }}>Email should be in lowercase</span>
                        : ''
                }
              />
              <br />

              <TextField
                name="password"
                label="Password"
                variant="standard"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                helperText={
                  !formData.password
                    ? 'Password is required'
                    : formData.password.length < 8
                      ? <span style={{ color: "red" }}>Password should be at least 8 characters long</span>
                      : !/\d/.test(formData.password)
                        ? <span style={{ color: "red" }}>Password should contain at least one digit</span>
                        : !/[A-Z]/.test(formData.password)
                          ? <span style={{ color: "red" }}>Password should contain at least one uppercase letter</span>
                          : !/[a-z]/.test(formData.password)
                            ? <span style={{ color: "red" }}>Password should contain at least one lowercase letter</span>
                            : !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)
                              ? <span style={{ color: "red" }}>Password should contain at least one special character</span>
                              : "Password is strong"
                }
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword}>
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>

                  ),
                }}
              />

              <br />

              <TextField
                name="mobilenumber"
                label="Mobile Number"
                variant="standard"
                placeholder="Enter your mobile number"
                value={formData.mobilenumber}
                onChange={(e) => {
                  if (e.target.value.length <= 10) {
                    handleChange(e);
                  }
                }}
                helperText={
                  !formData.mobilenumber
                    ? <span>Mobile number is required</span>
                    : (/\D/.test(formData.mobilenumber))
                      ? <span style={{ color: 'red' }}>Mobile number should contain only numbers </span>
                      : (formData.mobilenumber.length < 10)
                        ? <span style={{ color: 'red' }}>Mobile number should be at least 10 digits</span>
                        : "Enter your mobile number"
                }
              />
              <br />

              <Button submitteddata={submittedData} className="submitbtn" variant="contained" onClick={handleSubmit}>
                Create Account
              </Button>

            </div>
          </Box>
        </CardContent>
      </Card >
    </>
  );
}
export default Registration;









































