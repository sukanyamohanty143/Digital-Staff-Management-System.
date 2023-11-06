import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Typography, Button, Card ,CardContent} from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

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
    mobilnumber: '',
    degignation: '',
    gender: ''
  });

  console.log("formData", formData);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    if (formData.firstname && formData.lastname && formData.mobilnumber && formData.degignation && formData.gender) {

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
        mobilnumber: '',
        degignation: '',
        gender: ''
      })
      const goToLogin = () => {
        navigate("/login")
      }
      goToLogin()
    } else {
      alert('You have to fill all required.');
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
              '& .MuiTextField-root': { m: 2, width: '60ch' },
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

        </CardContent>


      </Card>

    </>
  );
}
export default Registration;







