import { TableHead, Table, TableCell, TableRow, TableContainer,Box,Grid } from "@mui/material";
import { useReactToPrint } from "react-to-print";
import React, { useRef } from "react";
// import PaginationCom from "./Pegination";
import GeneratePdf from "./GeneratePdf";
function TableData({ attendanceData }) {
   const [page, setPage] = React.useState(1);
   const itemsPerPage = 10;
   const componentRef = useRef();
   const GenretePdfSave = useReactToPrint({
       content: () => componentRef.current,
   });

   // this is useReactprint hook for convert pdf

   const HandleChange = (event, value) => {
       setPage(value);
   };   
   // this is calucalation of pagination
   const startIdx = (page - 1) * itemsPerPage;
   const endIdx = startIdx + itemsPerPage;
   const sortedData = attendanceData.sort(function (a, b) {

       var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
       if (nameA < nameB)
           return -1;
       if (nameA > nameB)
           return 1;
       return 0;
   });

   return (
       <>
           <Box ref={componentRef} sx={{ m: "20px", background: "#FAEBD7" }}>
               <TableContainer>
                   <Table>
                       <TableHead>


                           <TableRow >
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


                       {/* <PaginationCom attendanceData={attendanceData} itemsPerPage={itemsPerPage} page={page}  HandleChange={HandleChange} /> */}


                   </Grid>


                   <Grid item xs={3}>


                       <GeneratePdf GenretePdfSave={GenretePdfSave} />


                   </Grid>


               </Grid>
           </Box>
       </>
   )
}


export default TableData