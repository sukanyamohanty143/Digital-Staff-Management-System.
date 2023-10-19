import React,{useState,useEffect} from "react"
import {TableContainer,Table,TableHead,TableCell,TableBody,TableRow,Paper,Typography} from "@mui/material";
const dummyData = [
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
const Admin=()=>{
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        setUsers(dummyData);
    },[]);
    return(
        <>
            <Typography variant="h4" align="center" color="primary">Admin Page</Typography>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Mobile number</TableCell>
                            <TableCell>Designation</TableCell>
                            <TableCell>Gender</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user)=>(
                            <TableRow key={user.id}>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.name}</TableCell>
                                <TableCell>{user.mobileNumber}</TableCell>
                                <TableCell>{user.designation}</TableCell>
                                <TableCell>{user.gender}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default Admin;