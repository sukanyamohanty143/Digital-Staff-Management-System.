
import { useEffect } from "react";
import { useState } from "react";
import { Box, Button, TextField, Card } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import TableData from "./Table";
import Attendence from "./DateAttendence";
function Supervisor() {

    const [attendance, setAttendance] = useState([])
    const [search, setSearch] = useState("")
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

    const HandleOnchange = (e) => {
        setSearch(e.target.value)
    }
  
    const HandleSearch = () => {
        const filteredData = attendance.filter(item =>
            (item.name.toLowerCase().includes(search.toLowerCase())) ||
            (item.attendance.toLowerCase().includes(search.toLowerCase())) ||
            (item.date.attendance.toLowerCase().includes(search.toLowerCase()))
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
                        <TextField sx={{ background: "white", m: "2px" }} variant="outlined" label="search here......." onChange={HandleOnchange} value={search} />
                        <Button sx={{ height: "56px" }} variant="contained" onClick={HandleSearch}>

                            <SearchIcon />
                        </Button>
                    </Box>
                </Box>

                <TableData attendance={attendance} />
                <Attendence/>

            </Card>
        </>
    )
}
export default Supervisor;
