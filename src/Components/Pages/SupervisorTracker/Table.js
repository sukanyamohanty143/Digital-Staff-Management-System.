import {
    Card,
    CardContent,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button

} from '@material-ui/core';


import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


function TableData({ data }) {

    const tableRef = useRef(null);
    const printDocument = () => {

        const table = tableRef.current;
        if (table.length >0) {
            html2canvas(table).then((canvas) => {
                const imgData = canvas.toDataURL("image/png");
                const pdf = new jsPDF("p", "mm", "a4");
                const imgWidth = 210;
                const imgHeight = (canvas.height * imgWidth) / canvas.width;
                pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
                pdf.save("download.pdf");
            });
        }
       

    };

    console.log(data, "filrt")

    return (

        <>

            <Card container justifyContent="center" ref={tableRef} >
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

                                            <TableCell style={{ fontSize: "20px", textAlign: "center" }}>Name</TableCell>
                                            <TableCell style={{ fontSize: "20px", textAlign: "center" }}>attendance</TableCell>
                                            <TableCell style={{ fontSize: "20px", textAlign: "center" }}>Date</TableCell>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {data.map((item) => (
                                            <TableRow key={item.id}>

                                                <TableCell style={{ fontSize: "12px", textAlign: "center" }}>{item.name}</TableCell>
                                                <TableCell style={{ fontSize: "12px", textAlign: "center" }}>{item.attendance}</TableCell>
                                                <TableCell style={{ fontSize: "12px", textAlign: "center" }}>{item.date}</TableCell>



                                            </TableRow>
                                        ))}

                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Button variant="contained" color="primary" onClick={printDocument}>Dowloaw Pdf</Button>

        </>
    )
}
export default TableData;