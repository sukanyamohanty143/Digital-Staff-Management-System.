import { TableHead, Table, TableCell, TableRow, TableContainer, Box } from "@mui/material";
import { useReactToPrint } from "react-to-print";
import React, { useRef } from "react";

import { Grid,Pagination } from "@mui/material";
import GeneratePdf from "./GeneratePdf";
// import Pagination from "@mui/material";
function TableData({ data }) {


    const componentRef = useRef();
    const GenretePdfSave = useReactToPrint({
        content: () => componentRef.current,
    });


    return (
        <>
            <Box sx={{ m: "20px", background: "#FAEBD7" }} ref={componentRef}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>Name</TableCell>
                                <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>attendance</TableCell>
                                <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>Date</TableCell>
                            </TableRow>
                        </TableHead>

                        {data.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell sx={{ textAlign: "center" }}>{item.name}</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>{item.attendance}</TableCell>
                                <TableCell sx={{ textAlign: "center" }}>{item.date}</TableCell>
                            </TableRow>
                        ))}
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{ flexGrow: 1, m: "30px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <Pagination count={10} color="primary" />
                    </Grid>
                    <Grid item xs={3}>
                        <GeneratePdf GenretePdfSave={GenretePdfSave} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default TableData;
