import { Typography } from "@mui/material";
import { Table, TableCell, TableContainer, TableHead, TableRow, Card, CardContent, Grid, TableBody } from "@mui/material";

function TableData({filteredData}) {
    // console.log(,"data")
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
                                            <TableCell><Typography variant="h5">Name</Typography></TableCell>
                                            <TableCell><Typography variant="h5">Date</Typography></TableCell>
                                            <TableCell><Typography variant="h5">Attendence</Typography></TableCell>
                                           
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>

                                    

                                            {filteredData.map((item) => (

                                                <TableRow key={item} style={{fontSize:"20px"}}>

                                                    <TableCell> {item.name}</TableCell>
                                                    <TableCell>{item.date}</TableCell>
                                                    <TableCell>{item.attendan1e}</TableCell>
                                                   

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
