import React, { useState,useEffect } from 'react';
import {List,ListItem,TextField,Card,Button} from '@mui/material';
const UserForm = ({ onAddUser,onCloseForm,user}) => {
    const [id,setId]=useState('');
    const [name,setName]=useState('');
    const [mobileNumber,setMobileNumber]=useState('');
    const [designation,setDesignation]=useState('');
    const [gender,setGender]=useState('');
    useEffect(() => {
        if (user){
          setId(user.id);
          setName(user.name);
          setMobileNumber(user.mobileNumber);
          setDesignation(user.designation);
          setGender(user.gender);
        }
      },[user]);
    const addUser=()=>{
        const newUser={
            id,
            name,
            mobileNumber,
            designation,
            gender,
        };
        onAddUser(newUser);
        onCloseForm();

        setId('');
        setName('');
        setMobileNumber('');
        setDesignation('');
        setGender('');
    };
    return (
          
        <Card sx={{ maxWidth:400, marginBottom:2}}>
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
                <Button
                onClick={addUser}
                variant="contained"
                style={{marginLeft:15}}
                >Save Data</Button>
            </List>
        </Card> 
  );
};
export default UserForm;
