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
import { useLocation } from 'react-router-dom';

const EmployeeTable = (props) => {
  const location = useLocation();
  const user = location.state.user;
  console.log("user name", user)

  const [employeeData, setEmployeeData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/Attendence')
      .then((response) => response.json())
      .then((data) => {
        setEmployeeData(data);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [user]);
  console.log("all user data", employeeData)

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
            {employeeData.map((Attendance) => {
             
             if (Attendance.name === user) {
              return (
                <TableRow key={Attendance.id}>
                  <TableCell>{Attendance.id}</TableCell>
                  <TableCell>{Attendance.date}</TableCell>
                  <TableCell>{Attendance.name}</TableCell>
                  <TableCell>{Attendance.attendance}</TableCell>
                </TableRow>
              );
            }
            return null;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default EmployeeTable;
