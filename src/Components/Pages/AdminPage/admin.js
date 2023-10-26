import React, {useState,useEffect} from "react";
import {TableContainer,Table,TableHead,TableBody,TableRow,Paper,Typography,Button,Grid} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Update';
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
    const [users, setUsers] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const fetchData=()=>{
      fetch("http://localhost:3000/employees")
        .then((response)=>response.json())
        .then((data)=>setUsers(data))
        .catch((error)=>{
          console.error("Error fetching data:", error);
        });
    };
    useEffect(()=>{
        fetchData();
    },[]);

    const addUser =(newUser)=>{
        if (selectedUser){
            fetch(`http://localhost:3000/employees/${selectedUser.id}`,{
                method:"PUT",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(newUser),
            })
                .then(()=>fetchData())
                .catch((error)=>{
                    console.error("Error updating user data:", error);
                });
            setSelectedUser(null);
        } 
        else{
            fetch("http://localhost:3000/employees",{
                method:"POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body:JSON.stringify(newUser),
            })
                .then(()=>fetchData())
                .catch((error)=>{
                  console.error("Error adding a new user:", error);
                });
        }
        setShowForm(false);
        setUsers(users)
        setShowForm(showForm)
        setSelectedUser(selectedUser)
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
        fetch(`http://localhost:3000/employees/${user.id}`,{
            method: "DELETE",
        })
            .then(()=>fetchData())
            .catch((error)=>{
                console.error("Error deleting user data:", error);
            });
    };
  return(
    <>
        <Typography variant="h4" align="center">Admin Page</Typography>
        <CenteredButtonContainer>
            <Grid container spacing={2} justifyContent="center">
            <Grid item style={{ marginBottom: 10 }}>
                <Button variant="contained" onClick={() => setShowForm(true)}>
                Add User
                </Button>
            </Grid>
            <Grid item>
                <Button variant="contained" onClick={closeForm}>Logout</Button>
            </Grid>
            </Grid>
            {showForm && (
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
                    <TableCell colSpan={6}>Loading...page</TableCell>
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
                            <DeleteIcon
                                style={{marginRight:10}}
                                onClick={() => handleDelete(user)}
                            />
                            <UpdateIcon
                                onClick={() => handleEdit(user)}
                            />
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
