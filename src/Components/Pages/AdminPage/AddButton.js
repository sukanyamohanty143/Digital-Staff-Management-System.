import React, { useState,useEffect } from 'react';
import {List,ListItem,TextField,Card,Button} from '@mui/material';
const UserForm = ({ onAddUser,onCloseForm,user}) => {
    const [firstName,setFirstName]=useState('');
    const [lastName,setLastName]=useState('');
    const [mobileNumber,setMobileNumber]=useState('');
    const [designation,setDesignation]=useState('');
    const [gender,setGender]=useState('');
    const [mobailNumErro,setMobailNumErro]=useState(false)

    useEffect(() => {
        if (user){
          setFirstName(user.firstName);
          setLastName(user.lastName);
          setMobileNumber(user.mobileNumber);
          setDesignation(user.designation);
          setGender(user.gender);
        }
      },[user]);
      
    const addUser=()=>{
        const newUser={
            firstName,
            lastName,
            mobileNumber,
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
    const HandleMobailOnchange=(e)=>{
        setMobileNumber(e.target.value)
        if (mobileNumber.length>10){
            setMobailNumErro(true)
            alert("please enter 10 digit number!")
        }
        setMobailNumErro(false)

    }
    return (
        <Card sx={{maxWidth:400,marginBottom:2}}
        >
            <List>
                <ListItem>
                    <TextField
                        label="First Name"
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                    />
                </ListItem>
                <ListItem>
                    <TextField
                        label="Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </ListItem>
                <ListItem>
                    <TextField
                        label="Mobile Number"
                        mobailNumErro={mobailNumErro}
                        value={mobileNumber}
                        onChange={HandleMobailOnchange}
                        
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
