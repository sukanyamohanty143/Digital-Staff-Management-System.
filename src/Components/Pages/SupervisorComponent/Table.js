import React, { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { Box, Grid, Table, TableContainer, TableHead, TableCell, TableRow, Button } from "@mui/material";
import PaginationCom from "./Pegination";
import GeneratePdf from "./GeneratePdf";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
function TableData({ data, setFilteredData }) {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const componentRef = useRef();

    const GenretePdfSave = useReactToPrint({
        content: () => componentRef.current,
    });

    const handleSort = () => {
        if (data.length > 0) {
            const result = [...data].sort((a, b) => {
                const titleA = a.name || "";
                const titleB = b.name || "";
                return titleA.localeCompare(titleB);
            });
            setFilteredData(result);
        }
    };
    const HandelDate = () => {

        data.sort((a, b) => new Date(a.date) - new Date(b.date))
        console.log(data,"khushboooooooo")
    }
    setFilteredData(data)
    


    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    const pageCount = Math.ceil(data.length / itemsPerPage);

    const handleChangePage = (event, newPage) => {
        setCurrentPage(newPage);
    };

    return (
        <>
            <Box sx={{ m: "20px", background: "#FAEBD7" }} ref={componentRef}>
                <TableContainer>
                    <Table>
                        <TableHead sx={{ background: "#eeeeee", height: "100px", m: "10px", p: "20px", fontFamily: "Trirong" }}>
                            <TableRow>
                                <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>Name
                                    <ArrowDropDownIcon onClick={handleSort} />
                                </TableCell>
                                <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>attendance</TableCell>
                                <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>Date
                                    <ArrowDropDownIcon onClick={HandelDate} />
                                </TableCell>
                            </TableRow>
                        </TableHead>

                        {currentItems && currentItems.length > 0 ? (
                            currentItems.map((item, index) => (
                                <TableRow key={index}>
                                    <>
                                        <TableCell sx={{ textAlign: "center" }}>{item.name}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{item.attendance}</TableCell>
                                        <TableCell sx={{ textAlign: "center" }}>{item.date}</TableCell>
                                    </>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={3} sx={{ textAlign: "center" }}>No data</TableCell>
                            </TableRow>
                        )}
                    </Table>
                </TableContainer>
            </Box>
            <Box sx={{ flexGrow: 1, m: "30px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={9}>
                        <PaginationCom pageCount={pageCount} currentPage={currentPage} handleChangePage={handleChangePage} />
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