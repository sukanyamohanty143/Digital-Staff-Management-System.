import React, {useState,useEffect} from "react";
import {TableContainer,Table,TableHead,TableBody,TableRow,Paper,Typography} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
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
      fetch("http://localhost:8000/employees")
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
            fetch(`http://localhost:8000/employees/${selectedUser.id}`,{
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
        fetch(`http://localhost:8000/employees/${user.id}`,{
            method: "DELETE",
        })
            .then(()=>fetchData())
            .catch((error)=>{
                console.error("Error deleting user data:", error);
            });
    };
    return(
        <>
            <Typography variant="h4"  style={{ textAlign:"center", marginBottom:15,marginTop:10}}>Admin Page</Typography>
            {showForm && (
                <div style={{position: 'fixed',zIndex: 999,top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(0,0,0,.5)"}}>
                    <div style={{position:"fixed", top:"50%", left:"50%", transform:"translate(-50%, -50%)"}}> 
                        <UserForm
                            onAddUser={addUser}
                            user={selectedUser}
                            onCloseForm={closeForm}
                        />
                    </div>
                </div>
            )}
            <CenteredButtonContainer>
                <TableContainer component={Paper} style={{ width: '1000px',}}>
                    <Table>
                    <TableHead>
                        <StyledTableRow>
                        <StyledTableCell>Firstname</StyledTableCell>
                        <StyledTableCell>Lastname</StyledTableCell>
                        <StyledTableCell>Mobile number</StyledTableCell>
                        <StyledTableCell>Designation</StyledTableCell>
                        <StyledTableCell>Gender</StyledTableCell>
                        <StyledTableCell>Action</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {users===null?(
                        <TableRow>
                            <TableCell colSpan={6}>Loading...page</TableCell>
                        </TableRow>
                        ) : (
                        users.map((user) => (
                            <StyledTableRow key={user.id}>
                                <StyledTableCell>{user.firstname}</StyledTableCell>
                                <StyledTableCell>{user.lastname}</StyledTableCell>
                                <StyledTableCell>{user.mobilenumber}</StyledTableCell>
                                <StyledTableCell>{user.designation}</StyledTableCell>
                                <StyledTableCell>{user.gender}</StyledTableCell>

                                <StyledTableCell>
                                    <DeleteIcon
                                        style={{marginRight:10}}
                                        onClick={() => handleDelete(user)}
                                    />
                                    <EditIcon
                                        onClick={() => handleEdit(user)}
                                    />
                                </StyledTableCell>
                            </StyledTableRow>
                        ))
                        )}
                    </TableBody>
                    </Table>
                </TableContainer>
            </CenteredButtonContainer>
        </>
  );
};

export default AdminPage;



