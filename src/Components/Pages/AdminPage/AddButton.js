import React, { useState, useEffect } from 'react';
import { List, ListItem, TextField, Card, Button } from '@mui/material';

const UserForm = ({ onAddUser, onCloseForm, user }) => {
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [designation, setDesignation] = useState('');
    const [gender, setGender] = useState('');

    const [firstnameError, setFirstNameError] = useState('');
    const [lastnameError, setLastNameError] = useState('');
    const [mobilenumberError, setMobileNumberError] = useState('');
    const [designationError, setDesignationError] = useState('');
    const [genderError, setGenderError] = useState('');

    useEffect(() => {
        if (user) {
            setFirstName(user.firstname);
            setLastName(user.lastname);
            setMobileNumber(user.mobilenumber);
            setDesignation(user.designation);
            setGender(user.gender);
        }
    }, [user]);

    const validateName = (name, setNameError) => {
        if (!name) {
            setNameError('This field is required');
        } else if (!/^[a-zA-Z ]+$/.test(name)) {
            setNameError('Only letters and spaces are allowed');
        } else {
            setNameError('');
        }
    };

    const validateMobileNumber = (number, setNumberError) => {
        if (!number) {
            setNumberError('This field is required');
        } else if (!/^\d{10}$/.test(number)) {
            setNumberError('Mobile number must be 10 digits long');
        } else {
            setNumberError('');
        }
    };

    const addUser = () => {
        validateName(firstname, setFirstNameError);
        validateName(lastname, setLastNameError);
        validateMobileNumber(mobilenumber, setMobileNumberError);

        if (!firstnameError && !lastnameError && !mobilenumberError) {
            const newUser = {
                firstname,
                lastname,
                mobilenumber,
                designation,
                gender,
            };
            onAddUser(newUser);
            onCloseForm();

            setFirstName('');
            setLastName('');
            setMobileNumber('');
            setDesignation('');
            setGender('');
            setFirstNameError('');
            setLastNameError('');
            setMobileNumberError('');
        }
    };

    return (
        <Card sx={{ maxWidth: 400, marginBottom: 2 }}>
            <List>
                <ListItem>
                    <TextField
                        label="First Name"
                        value={firstname}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                            validateName(e.target.value, setFirstNameError);
                        }}
                        error={Boolean(firstnameError)}
                        helperText={firstnameError}
                    />
                </ListItem>
                <ListItem>
                    <TextField
                        label="Last Name"
                        value={lastname}
                        onChange={(e) => {
                            setLastName(e.target.value);
                            validateName(e.target.value, setLastNameError);
                        }}
                        error={Boolean(lastnameError)}
                        helperText={lastnameError}
                    />
                </ListItem>
                <ListItem>
                    <TextField
                        label="Mobile Number"
                        value={mobilenumber}
                        onChange={(e) => {
                            setMobileNumber(e.target.value);
                            validateMobileNumber(e.target.value, setMobileNumberError);
                        }}
                        error={Boolean(mobilenumberError)}
                        helperText={mobilenumberError}
                    />
                </ListItem>
                <ListItem>
                    <TextField
                        label="Designation"
                        value={designation}
                        onChange={(e) =>{setDesignation(e.target.value);
                            validateName(e.target.value,setDesignationError)
                        }}
                        error={Boolean(designationError)}
                        helperText={designationError}
                    />
                </ListItem>
                <ListItem>
                    <TextField
                        label="Gender"
                        value={gender}
                        onChange={(e) => {setGender(e.target.value);
                            validateName(e.target.value, setGenderError)
                        }}
                        
                        error={Boolean(genderError)}
                        helperText={genderError}
                    />
                </ListItem>
                <Button onClick={addUser} variant="contained" style={{ marginLeft: 15 }}>
                    Save Data
                </Button>
            </List>
        </Card>
    );
};

export default UserForm;




