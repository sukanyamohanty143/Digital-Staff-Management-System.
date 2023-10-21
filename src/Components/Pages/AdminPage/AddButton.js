import React, { useState } from 'react';
import {List,ListItem,Button,TextField} from '@mui/material';
import "./style.css"
const UserForm = ({ onAddUser }) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [designation, setDesignation] = useState('');
    const [gender, setGender] = useState('');
    const addUser = () => {
        const newUser = {
            id,
            name,
            mobileNumber,
            designation,
            gender,
        };
        onAddUser(newUser);

        setId('');
        setName('');
        setMobileNumber('');
        setDesignation('');
        setGender('');
    };
    return (
        <>
            <List>
                <ListItem>
                  <TextField
                    label="ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    label="Mobile Number"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    label="Designation"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  />
                </ListItem>
                <ListItem>
                  <TextField
                    label="Gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </ListItem>
                <ListItem>
                    <Button variant="contained" onClick={addUser}>Add Form</Button>
                </ListItem>
            </List>
            {/* <Button variant="contained" onClick={addUser}>Add Form</Button> */}
        </>
  );
};
export default UserForm;
