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
  Container
} from '@mui/material';
import AddPagination from './Pagination';
const EmployeeTable = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
        fetch('http://localhost:8000/Attendence')
          .then((response) => response.json())
          .then((data) => setEmployeeData(data))
          .catch((error) => console.error('Error fetching data:', error));
      }, []);

  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = employeeData.slice(indexOfFirstItem, indexOfLastItem);
  const pageCount = Math.ceil(employeeData.length / itemsPerPage);

  const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
  };

  return (
    <div>
      <Typography variant="h5" gutterBottom style={{ justifyContent: 'center', display: 'flex' }} marginTop={3}>
            Employee Attendance data
      </Typography>
      <Container style={{ display: 'flex', justifyContent: 'center', mT: '20px' }}>
              <TableContainer component={Paper} sx={{ width: '100%', p: '20px', m: '20px' }} >
                      <Table>
                      <TableHead>
                       <TableRow sx={{ backgroundColor: "#83A2FF" }}>
                            <TableCell>Date</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Attendance</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody sx={{ backgroundColor: '#FFEBD8' }}>
                        {currentItems && currentItems.length > 0 ? (
                        currentItems.map((attendance, index) => (
                        <TableRow key={index}>
                            <TableCell>{attendance.date}</TableCell>
                            <TableCell>{attendance.name}</TableCell>
                            <TableCell>{attendance.attendance}</TableCell>
                        </TableRow>
                      ))
                      ) : (
                          <TableRow>
                              <TableCell colSpan={3}>No data available</TableCell>
                          </TableRow>
                        )}
                    </TableBody>
                      </Table>
                          <AddPagination pageCount={pageCount} currentPage={currentPage} handleChangePage={handleChangePage} />
                    </TableContainer>
                  </Container>
              </div>
  );
};

export default EmployeeTable;
