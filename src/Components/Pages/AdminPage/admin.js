import React, {useState,useEffect} from "react";
import {TableContainer,Table,TableHead,TableBody,TableRow,Paper,Typography,Button,Grid} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import UserForm from "./AddButton";

const StyledTableCell=styled(TableCell)(({ theme })=>({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "blue",
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 15,
    },
}));
const StyledTableRow=styled(TableRow)(({ theme })=>({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));
const CenteredButtonContainer=styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
});

const AdminPage=()=>{
    const [users,setUsers]=useState(null);
    const [showForm,setShowForm]=useState(false);
    const [selectedUser,setSelectedUser]=useState(null);

    const fetchData = () => {
        fetch("http://localhost:3000/employees")
        .then((response)=>response.json())
        .then((data)=>setUsers(data))
        .catch((error)=>{
            console.error("Error fetching data:",error);
        });
    };
    useEffect(()=>{
        fetchData();
    },[]);

    const addUser=(newUser)=>{
    if(selectedUser){
        const updatedUsers=users.map((user)=>
            user.id===selectedUser.id ?newUser:user
        );
        setUsers(updatedUsers);
        setSelectedUser(null);
    } 
    else{
        const updatedUsers=[...users,{ ...newUser,id:users.length + 1 }];
        setUsers(updatedUsers);
    }
    setShowForm(false);
    };

    const closeForm=()=>{
        setShowForm(false);
        setSelectedUser(null);
    };

    const handleEdit=(user)=>{
        setSelectedUser(user);
        setShowForm(true);
    };

    const handleDelete=(user)=>{
        const updatedUsers=users.filter((u)=>u.id!==user.id);
        setUsers(updatedUsers);
    };

    return (
        <>
            <Typography variant="h4" align="center">Admin Page</Typography>
            <CenteredButtonContainer>
                <Grid container spacing={2} style={{ marginLeft: "83%" }}>
                <Grid item style={{ marginBottom: 10 }}>
                    <Button variant="contained" onClick={()=>setShowForm(true)}>
                    Add User
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained" onClick={closeForm}>Logout</Button>
                </Grid>
                </Grid>
                {showForm &&(
                <UserForm
                    onAddUser={addUser}
                    user={selectedUser}
                    onCloseForm={closeForm}
                />
                )}
            </CenteredButtonContainer>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <StyledTableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell>Name</StyledTableCell>
                        <StyledTableCell>Mobile number</StyledTableCell>
                        <StyledTableCell>Designation</StyledTableCell>
                        <StyledTableCell>Gender</StyledTableCell>
                        <StyledTableCell>Action</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {users === null ? (
                        <TableRow>
                            <TableCell colSpan={6}>Loading...</TableCell>
                        </TableRow>
                        ) : (
                        users.map((user) => (
                            <StyledTableRow key={user.id}>
                            <StyledTableCell>{user.id}</StyledTableCell>
                            <StyledTableCell>{user.name}</StyledTableCell>
                            <StyledTableCell>{user.mobileNumber}</StyledTableCell>
                            <StyledTableCell>{user.designation}</StyledTableCell>
                            <StyledTableCell>{user.gender}</StyledTableCell>
                            <StyledTableCell>
                                <Button variant="contained" onClick={() => handleEdit(user)} style={{ marginLeft: 5 }}>Update</Button>
                                <Button variant="contained" onClick={() => handleDelete(user)}>Delete</Button>
                            </StyledTableCell>
                            </StyledTableRow>
                        ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
};
export default AdminPage;
