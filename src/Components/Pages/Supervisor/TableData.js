import { TableCell, TableContainer, TableHead, TableRow, Table, Grid, TableBody, Typography } from "@mui/material"

function TableData({ employees }) {
    console.log(employees)

    return (
        <>
            {/* <Grid container xs={12} item spacing={2} style={{ position: "relative", bottom: "20px", marginTop: "30px" }}>
                
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>

                                <TableCell style={{ textAlign: 'center' }}><Typography variant="h5">FirstName</Typography></TableCell>
                                <TableCell><Typography variant="h5">LastName</Typography></TableCell>
                                <TableCell><Typography variant="h5">Mobile</Typography></TableCell>
                                <TableCell><Typography variant="h5">Attendance</Typography></TableCell>
                                <TableCell><Typography variant="h5">Date</Typography></TableCell>
                                <TableCell><Typography variant="h5">Designation</Typography></TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>

                            {employees.map((item) => (

                                <TableRow>

                                    <TableCell style={{ textAlign: 'center' }}><Typography variant="h6">{item.FirstName}</Typography></TableCell>
                                    <TableCell><Typography variant="h6">{item.LastName}</Typography></TableCell>
                                    <TableCell><Typography variant="h6">{item.Mobile}</Typography></TableCell>
                                    <TableCell><Typography variant="h6">{item.attendance}</Typography></TableCell>
                                    <TableCell><Typography variant="h6">{item.date}</Typography></TableCell>
                                    <TableCell><Typography variant="h6">{item.designation}</Typography></TableCell>

                                </TableRow>

                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid> */}
        </>
    )
}
export default TableData