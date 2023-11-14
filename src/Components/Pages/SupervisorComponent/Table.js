import React, { useRef, useState } from "react";
import { Box, Grid, Table, TableContainer, TableHead, TableCell, TableRow, Pagination,Select,MenuItem} from "@mui/material";
import { useReactToPrint } from "react-to-print";
import GeneratePdf from "./GeneratePdf";

function TableData({ data }) {
    const componentRef = useRef();
    const GenretePdfSave = useReactToPrint({
        content: () => componentRef.current,
    });

    const itemsPerPage = 10;
    const [page, setPage] = useState(1);

    const startIdx = (page - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;

    const handleChange = (event, value) => {
        setPage(value);
    };

    const sortedData = data.sort(function (a, b) {

        var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
        if (nameA < nameB)
            return -1;
        if (nameA > nameB)
            return 1;
        return 0;
    });
    return (
        <>
            <Box sx={{ m: "20px", background: "#FAEBD7" }} ref={componentRef}>
                <TableContainer>
                    <Table>

                        <TableHead sx={{ background: "#eeeeee", height: "100px", m: "10px", p: "20px" }}>
                            <TableRow>

                                <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>Name
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                    
                                        label="Age"
                                        
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </TableCell>
                                <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>attendance</TableCell>
                                <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>Date</TableCell>

                            </TableRow>

                        </TableHead>


                        {sortedData.slice(startIdx, endIdx).map((item) => (
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
                        <Pagination
                            count={Math.ceil(data.length / itemsPerPage)}
                            color="primary"
                            page={page}
                            onChange={handleChange}
                        />
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
