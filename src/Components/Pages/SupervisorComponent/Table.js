

// import { TableHead, Table, TableCell, TableRow, TableContainer, Box } from "@mui/material";
// import { useReactToPrint } from "react-to-print";
// import React, { useRef } from "react";
// import { Grid } from "@mui/material";
// import GeneratePdf from "./GeneratePdf";
// import PaginationCom from "./Pegination";
// function TableData({ data }) {

//     const [page, setPage] = React.useState(1);
//     const itemsPerPage = 10;
//     const startIdx = (page - 1) * itemsPerPage;
//     const endIdx = startIdx + itemsPerPage;

//     const componentRef = useRef();
//     const GenretePdfSave = useReactToPrint({
//         content: () => componentRef.current,
//     });



//     const HandleChange = (event, value) => {
//         setPage(value);
//     };


//     return (
//         <>
//             <Box sx={{ m: "20px", background: "#FAEBD7" }} ref={componentRef}>
//                 <TableContainer>
//                     <Table>
//                         <TableHead>
//                             <TableRow >
//                                 <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>Name</TableCell>
//                                 <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>attendance</TableCell>
//                                 <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>Date</TableCell>
//                             </TableRow>
//                         </TableHead>

//                         {data.slice(startIdx, endIdx).map((item) => (
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
//                         <PaginationCom HandleChange={HandleChange} />
//                     </Grid>
//                     <Grid item xs={3}>
//                         <GeneratePdf GenretePdfSave={GenretePdfSave} data={data} page={page} itemsPerPage={itemsPerPage} />
//                     </Grid>

//                 </Grid>
//             </Box>
//         </>
//     )
// }
// export default TableData;




// import { TableHead, Table, TableCell, TableRow, TableContainer, Box } from "@mui/material";
// import { useReactToPrint } from "react-to-print";
// import React, { useRef } from "react";
// import { Grid } from "@mui/material";
// import GeneratePdf from "./GeneratePdf";
// import PaginationCom from "./Pegination";
// function TableData({ data }) {

//     const [page, setPage] = React.useState(1);
//     const itemsPerPage = 10;
//     const startIdx = (page - 1) * itemsPerPage;
//     const endIdx = startIdx + itemsPerPage;

//     const componentRef = useRef();
//     const GenretePdfSave = useReactToPrint({
//         content: () => componentRef.current,
//     });

//     const HandleChange = (event, value) => {
//         setPage(value);
//     };

//     return (
//         <>
//             <Box sx={{ m: "20px", background: "#FAEBD7" }} ref={componentRef}>
//                 <TableContainer>
//                     <Table>
//                         <TableHead>
//                             <TableRow >
//                                 <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>Name</TableCell>
//                                 <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>attendance</TableCell>
//                                 <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>Date</TableCell>
//                             </TableRow>
//                         </TableHead>

//                         {data.slice(startIdx, endIdx).map((item) => (
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
//                     </Grid>
//                     <Grid item xs={3}>
//                         <GeneratePdf GenretePdfSave={GenretePdfSave} data={data} page={page} itemsPerPage={itemsPerPage} />
//                     </Grid>

//                 </Grid>
//             </Box>
//         </>
//     )
// }
// export default TableData;



import { TableHead, Table, TableCell, TableRow, TableContainer, Box } from "@mui/material";
import { useReactToPrint } from "react-to-print";
import React, { useRef } from "react";

import { Grid } from "@mui/material";
import GeneratePdf from "./GeneratePdf";

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
                  

                    </Grid>
                    <Grid item xs={3}>
                        <GeneratePdf GenretePdfSave={GenretePdfSave}/>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default TableData;
