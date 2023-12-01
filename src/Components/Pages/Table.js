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
      <Typography variant="h5" gutterBottom>
        Employee Data
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Date</TableCell> 
              <TableCell>Name</TableCell>
              <TableCell>Attendance</TableCell>
              {/* <TableCell>Date</TableCell>  */}
            </TableRow>
          </TableHead>
          <TableBody>
            {employeeData.map((Attendence) => (
              <TableRow key={Attendence.id}>
                <TableCell>{Attendence.id}</TableCell>
                <TableCell>{Attendence.date}</TableCell> 
                <TableCell>{Attendence.name}</TableCell>
                <TableCell>{Attendence.attendance}</TableCell>
        
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EmployeeTable;