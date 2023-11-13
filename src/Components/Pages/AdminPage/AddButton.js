import React, { useState,useEffect } from 'react';
import {List,ListItem,TextField,Card,Button} from '@mui/material';
const UserForm = ({ onAddUser,onCloseForm,user}) => {
    const [firstname,setFirstName]=useState('');
    const [lastname,setLastName]=useState('');
    const [mobilenumber,setMobileNumber]=useState('');
    const [designation,setDesignation]=useState('');
    const [gender,setGender]=useState('');

    useEffect(() => {
        if (user){
          setFirstName(user.firstname);
          setLastName(user.lastname);
          setMobileNumber(user.mobilenumber);
          setDesignation(user.designation);
          setGender(user.gender);
        }
    },[user]);
      
    const addUser=()=>{
        const newUser={
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
    };
    return (
        <Card sx={{maxWidth:400,marginBottom:2}}>
            <List>
                <ListItem>
                    <TextField
                        label="First Name"
                        value={firstname}
                        onChange={(e)=>setFirstName(e.target.value)}
                    />
                </ListItem>
                <ListItem>
                    <TextField
                        label="Last Name"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </ListItem>
                <ListItem>
                    <TextField
                        label="Mobile Number"
                        value={mobilenumber}
                        onChange={(e)=> setMobileNumber(e.target.value)}
                        
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



