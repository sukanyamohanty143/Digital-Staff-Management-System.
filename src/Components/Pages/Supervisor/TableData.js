
import React from 'react';
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
import { useRef } from "react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import { Button } from '@mui/material';


function TableData({ filterArr }) {
    const inputRef = useRef(null);
    const HandlePDF = () => {

        html2canvas(inputRef.current).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "JPEG", 0, 0);
            pdf.save("download.pdf");

        });
    }


    return (
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
                                        {filterArr.map((item) => (
                                            <TableRow key={item.id}>
                                                <TableCell style={{ fontSize: "20px" }}>{item.FirstName}</TableCell>
                                                <TableCell style={{ fontSize: "20px" }}>{item.LastName}</TableCell>
                                                <TableCell style={{ fontSize: "20px" }}>{item.Mobile}</TableCell>
                                                <TableCell style={{ fontSize: "20px" }}>{item.attendance}</TableCell>
                                                <TableCell style={{ fontSize: "20px" }}>{item.Gender}</TableCell>
                                                <TableCell style={{ fontSize: "20px" }}>{item.designation}</TableCell>
                                                <TableCell style={{ fontSize: "20px" }}>{item.date}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
            <Button onClick={HandlePDF}>PDF</Button>
        </>
    );
}

export default TableData;
