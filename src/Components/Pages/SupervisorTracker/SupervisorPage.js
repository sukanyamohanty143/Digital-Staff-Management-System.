


import { useEffect } from "react";
import { useState } from "react";


import TableData from "./Table";
import {Box,Button,TextField,Card} from "@mui/material";


import AttendenceData from "./AttendenceData";
import SearchIcon from '@mui/icons-material/Search';


function SupervisorPage() {


   const [attendance, setAttendance] = useState([])
   const [search,setSearch]=useState("")


   cons


   const FetchData = () => {


       fetch("http://localhost:8000/Attendence").then((res) => {
           return res.json()


       }).then((res) => {
           setAttendance(res)
       })
      
   }
   useEffect(() => {
       FetchData()
   }, [])






    const HandleOnchange=(e)=>{


        setSearch(e.target.value)


    }


    const HandleSearch = () => {
        const filteredData = attendance.filter(item =>


            item.name.toLowerCase().includes(search.toLowerCase()) || item.attendance.toLowerCase().includes(search.toLowerCase()) || item.date.attendance.toLowerCase().includes(search.toLowerCase())
        );
        setAttendance(filteredData);
    };


   console.log(attendance)


   return (


       <>


           <Card sx={{ m: '5rem', boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>




                <Box
                   m={1}
                   display="flex"
                   justifyContent="flex-end"
                   alignItems="flex-end"
                   sx={{ background: "#eeeeee" }}
               >
                  
                   <Box sx={{ m: "20px" }}>
              
                       <TextField sx={{ background: "white", m: "2px" }} variant="outlined" label="search here......." onChange={HandleOnchange} value={search}/>


                       <Button sx={{ height: "56px" }} variant="contained" onClick={HandleSearch}>
                          
                           <SearchIcon/>
                       </Button>




                   </Box>




               </Box>




               <TableData attendanceData={attendance} />
           


           </Card>


          
           < AttendenceData attendance={attendance} />




       </>
   )
}
export default SupervisorPage;