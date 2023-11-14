import {
    Card,
    CardContent,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow

} from '@material-ui/core';

function TableData({ data }) {

    console.log(data, "filrt")

    return (

        <>
        
                <Card container justifyContent="center" >
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
                                            <TableRow >
                                                
                                                <TableCell style={{ fontSize: "20px",textAlign:"center" }}>FirstName</TableCell>
                                                <TableCell style={{ fontSize: "20px",textAlign:"center" }}>LastName</TableCell>
                                                <TableCell style={{ fontSize: "20px",textAlign:"center" }}>Mobile</TableCell>

                                            </TableRow>
                                        </TableHead>
                                        <TableBody>

                                            {data.map((item) => (
                                                <TableRow key={item.id}>

                                                    <TableCell style={{ fontSize: "12px",textAlign:"center" }}>{item.name}</TableCell>
                                                    <TableCell style={{ fontSize: "12px",textAlign:"center" }}>{item.lastname}</TableCell>
                                                    <TableCell style={{ fontSize: "12px",textAlign:"center" }}>{item.degignation}</TableCell>
                                                    


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