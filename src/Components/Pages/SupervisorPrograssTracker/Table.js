function Table(){
    return(
        <>
                    <Card container justifyContent="center" ref={inputRef}>
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
                                            <TableCell style={{ fontSize: "22px" }}>FirstName</TableCell>
                                            <TableCell style={{ fontSize: "22px" }}>LastName</TableCell>
                                            <TableCell style={{ fontSize: "22px" }}>Mobile</TableCell>
                                            <TableCell style={{ fontSize: "22px" }}>attendance</TableCell>
                                            <TableCell style={{ fontSize: "22px" }}>Gender</TableCell>
                                            <TableCell style={{ fontSize: "22px" }}>designation</TableCell>
                                            <TableCell style={{ fontSize: "22px" }}>date</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        
                                            <TableRow >
                                                <TableCell style={{ fontSize: "20px" }}></TableCell>
                                                <TableCell style={{ fontSize: "20px" }}></TableCell>
                                                <TableCell style={{ fontSize: "20px" }}></TableCell>
                                                <TableCell style={{ fontSize: "20px" }}></TableCell>
                                                <TableCell style={{ fontSize: "20px" }}></TableCell>
                                                <TableCell style={{ fontSize: "20px" }}></TableCell>
                                                <TableCell style={{ fontSize: "20px" }}></TableCell>
                                            </TableRow>
                                
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
export default Table;