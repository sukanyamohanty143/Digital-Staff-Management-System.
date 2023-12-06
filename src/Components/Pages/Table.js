import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Container,
  Pagination
} from '@mui/material';

const EmployeeTable = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));


  const [page,setPage]=useState(1)
  const handleChange=(e,p)=>{
      console.log(e,p)
      setPage(p)
  }
  useEffect(() => {
    fetch('http://localhost:8000/Attendence') 
      .then((response) => response.json())
      .then((data) => {
        const userName = user.firstname+" "+user.lastname
        const userAttendenceData = data.filter((attendence) => attendence.userName === userName);
        setEmployeeData(userAttendenceData);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Typography variant="h5" gutterBottom style={{justifyContent: 'center', display: 'flex'}} marginTop={3}>
        Employee Attendance data 
      </Typography>
      <Container style={{ display: 'flex', justifyContent: 'center', mT: '20px' }}>

      <TableContainer component={Paper} sx={{ width: '2000px', p: '20px', m: '20px' }} >
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#83A2FF" }}>
              <TableCell>Name</TableCell>
              <TableCell>Date</TableCell> 
              <TableCell>Attendance</TableCell>
            </TableRow>
          </TableHead>
          <TableBody sx={{ backgroundColor: '#FFEBD8' }}>
            {employeeData.map((Attendence) => (
              <TableRow key={Attendence.id}>
                <TableCell>{Attendence.name}</TableCell>
                <TableCell>{Attendence.date}</TableCell> 
                <TableCell>{Attendence.attendance}</TableCell>
        
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
          count={5} color='primary' onChange={handleChange}
              page={page}
     ></Pagination>
      </Container>
    
    </div>
  );
};

export default EmployeeTable;