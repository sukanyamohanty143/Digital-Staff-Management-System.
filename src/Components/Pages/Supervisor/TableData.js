import { Table, TableCell, TableContainer, TableHead, TableRow, Card, CardContent, Grid, TableBody } from "@mui/material";

function TableData({ filterArr }) {
    return (
        <>


            <Card container
                justifyContent="center">
                <CardContent>
                    <Grid
                        align="center"
                        container
                        direction="column"
                        justify="center"
                        spacing={0}

                    >


                        <Grid item>

                            <TableContainer>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>FIrstName</TableCell>
                                            <TableCell>LastName</TableCell>
                                            <TableCell>Mobile</TableCell>
                                            <TableCell>attendance</TableCell>
                                            <TableCell>Gender</TableCell>
                                            <TableCell>designation</TableCell>
                                            <TableCell>date</TableCell>
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>

                                    

                                            {filterArr.map((item) => (

                                                <TableRow key={item}>

                                                    <TableCell> {item.FirstName}</TableCell>
                                                    <TableCell>{item.LastName}</TableCell>
                                                    <TableCell>{item.Mobile}</TableCell>
                                                    <TableCell>{item.attendance}</TableCell>
                                                    <TableCell>{item.Gender}</TableCell>
                                                    <TableCell>{item.designation}</TableCell>
                                                    <TableCell>{item.date}</TableCell>

                                                </TableRow>

                                            ))}

                                    

                                    </TableBody>
                                </Table>
                            </TableContainer>

                        </Grid>

                    </Grid>

                </CardContent>
            </Card>


        </>
    )
}
export default TableData;
