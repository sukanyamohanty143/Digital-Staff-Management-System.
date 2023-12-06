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
} from '@mui/material';

const EmployeeTable = () => {
  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/Attendence') 
      .then((response) => response.json())
      .then((data) => setEmployeeData(data))
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
     
      </Container>
    </div>
  );
};

export default EmployeeTable;