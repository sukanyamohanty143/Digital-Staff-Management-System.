// import { TableHead, Table, TableCell, TableRow, TableContainer, Box } from "@mui/material";
// import { useReactToPrint } from "react-to-print";
// import React, { useRef } from "react";

// import { Grid,Pagination } from "@mui/material";
// import GeneratePdf from "./GeneratePdf";
// // import Pagination from "@mui/material";
// function TableData({ data }) {


//     const componentRef = useRef();
//     const GenretePdfSave = useReactToPrint({
//         content: () => componentRef.current,
//     });


//     return (
//         <>
//             <Box sx={{ m: "20px", background: "#FAEBD7" }} ref={componentRef}>
//                 <TableContainer>
//                     <Table>
//                         <TableHead>
//                             <TableRow>
//                                 <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>Name</TableCell>
//                                 <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>attendance</TableCell>
//                                 <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>Date</TableCell>
//                             </TableRow>
//                         </TableHead>

//                         {data.map((item) => (
//                             <TableRow key={item.id}>
//                                 <TableCell sx={{ textAlign: "center" }}>{item.name}</TableCell>
//                                 <TableCell sx={{ textAlign: "center" }}>{item.attendance}</TableCell>
//                                 <TableCell sx={{ textAlign: "center" }}>{item.date}</TableCell>
//                             </TableRow>
//                         ))}
//                     </Table>
//                 </TableContainer>
//             </Box>
//             <Box sx={{ flexGrow: 1, m: "30px" }}>
//                 <Grid container spacing={2}>
//                     <Grid item xs={9}>
//                         <Pagination count={10} color="primary" />
//                     </Grid>
//                     <Grid item xs={3}>
//                         <GeneratePdf GenretePdfSave={GenretePdfSave} />
//                     </Grid>
//                 </Grid>
//             </Box>
//         </>
//     );
// }

// export default TableData;


import React, { useRef, useState } from "react";
import { Box, Grid, Table, TableContainer, TableHead, TableCell, TableRow, Pagination } from "@mui/material";
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
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>Name</TableCell>
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
