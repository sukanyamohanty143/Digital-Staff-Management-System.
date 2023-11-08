
import TableData from "./Table";
import React, { useEffect, useState } from "react";
import {
    TextField,
    Button,
    Box,
    Card
} from "@mui/material";

import SearchIcon from '@mui/icons-material/Search';
const Supervisor = () => {

    const [selectedRange, setSelectedRange] = useState(null);
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");

    const FetchData = () => {
        fetch("http://localhost:8000/Attendence")
            .then((res) => res.json())
            .then((res) => setData(res));
    };
    const HandleOnchange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        FetchData();
    }, []);

    const handleDropdownChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedRange(selectedValue);
    };

    const HandleSearch = () => {
        const filteredData = data.filter((record) => {
            return record.name.toLowerCase().includes(search.toLowerCase());
        });
        console.log(filteredData, "khushbpoooo")
        setData(filteredData);
    };

    const filterAttendanceData = () => {
        if (selectedRange) {
            const startDate = (selectedRange - 1) * 7 + 1;
            const endDate = selectedRange * 7;
            return data.filter((record) => {
                const recordDate = new Date(record.date).getDate();
                return recordDate >= startDate && recordDate <= endDate;
            });
        } else {
            return data;
        }
    };
    const filterdData = filterAttendanceData();
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

                    <TextField sx={{ background: "white",position:"relative", bottom:"20px",left:"15px"}} variant="outlined" label="search here......." onChange={HandleOnchange} value={search} />
                    <Button sx={{ height: "56px",m:"20px" }} variant="contained" onClick={HandleSearch}>

                        <SearchIcon />
                    </Button>
                
                </Box>
                <TableData data={filterdData} />
            </Card >
        </>
    );
};

export default Supervisor;
