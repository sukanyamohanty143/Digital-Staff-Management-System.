import { TableCell, TableContainer, TableHead, TableRow, Table, Grid, TableBody, Typography } from "@mui/material"


function TableData() {
    return (
        <>
            <Grid container xs={9} item spacing={2} justifyContent="center" style={{ marginLeft: "190px" }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><Typography variant="h5">Name</Typography></TableCell>
                                <TableCell><Typography variant="h5">Age</Typography></TableCell>
                                <TableCell><Typography variant="h5">Subject</Typography></TableCell>
                                <TableCell><Typography variant="h5">Class</Typography></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>khushbooo</TableCell>
                                <TableCell>khushbooo</TableCell>
                                <TableCell>khushbooo</TableCell>
                                <TableCell>khushbooo</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>khushbooo</TableCell>
                                <TableCell>khushbooo</TableCell>
                                <TableCell>khushbooo</TableCell>
                                <TableCell>khushbooo</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>khushbooo</TableCell>
                                <TableCell>khushbooo</TableCell>
                                <TableCell>khushbooo</TableCell>
                                <TableCell>khushbooo</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>khushbooo</TableCell>
                                <TableCell>khushbooo</TableCell>
                                <TableCell>khushbooo</TableCell>
                                <TableCell>khushbooo</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>khushbooo</TableCell>
                                <TableCell>khushbooo</TableCell>
                                <TableCell>khushbooo</TableCell>
                                <TableCell>khushbooo</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>khushbooo</TableCell>
                                <TableCell>khushbooo</TableCell>
                                <TableCell>khushbooo</TableCell>
                                <TableCell>khushbooo</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>khushbooo</TableCell>
                                <TableCell>khushbooo</TableCell>
                                <TableCell>khushbooo</TableCell>
                                <TableCell>khushbooo</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </>
    )
}
export default TableData