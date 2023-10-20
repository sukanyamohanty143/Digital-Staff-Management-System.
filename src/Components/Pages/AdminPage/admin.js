import React,{useState,useEffect} from "react"
import {TableContainer,Table,TableHead,TableBody,TableRow,Paper,Typography} from "@mui/material";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
// import AddButton from "./AddUser";

const StyledTableCell=styled(TableCell)(({ theme })=>({
    [`&.${tableCellClasses.head}`]:{
      backgroundColor:"blue",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]:{
      fontSize: 15,
    },
}));
  const StyledTableRow=styled(TableRow)(({ theme })=>({
    '&:nth-of-type(odd)':{
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th':{
      border: 0,
    },
}));

const dummyData=[
    {
      id: 1,
      name: "John Doe",
      mobileNumber: "123-456-7890",
      designation: "Software Engineer",
      gender: "Male",
    },
    {
      id: 2,
      name: "Jane Smith",
      mobileNumber: "987-654-3210",
      designation: "Product Manager",
      gender: "Female",
    },
    {
      id: 3,
      name: "Bob Johnson",
      mobileNumber: "555-123-4567",
      designation: "UI/UX Designer",
      gender: "Male",
    },
  ];
const AdminPage=()=>{
    const [users,setUsers]=useState(dummyData);
    // const addUser=(newUser)=>{
    //     const updatedUsers=[...users,{...newUser,id:users.lenght+1}];
    //     setUsers(updatedUsers)
    // }
    useEffect(()=>{
        setUsers(dummyData);
    },[]);
    return(
        <>
            <Typography variant="h4" align="center" color="blue">Admin Page</Typography>
                {/* <AddButton onAddUser={addUser} /> */}
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <StyledTableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell>Mobile number</StyledTableCell>
                            <StyledTableCell>Designation</StyledTableCell>
                            <StyledTableCell>Gender</StyledTableCell>
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user)=>(
                            <StyledTableRow key={user.id}>
                                <StyledTableCell>{user.id}</StyledTableCell>
                                <StyledTableCell>{user.name}</StyledTableCell>
                                <StyledTableCell>{user.mobileNumber}</StyledTableCell>
                                <StyledTableCell>{user.designation}</StyledTableCell>
                                <StyledTableCell>{user.gender}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default AdminPage;
