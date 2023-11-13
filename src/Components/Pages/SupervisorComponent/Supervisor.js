import TableData from "./Table";
import React, { useEffect, useState } from "react";
import DateMenu from "./DateMenu";
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
    const [filteredData, setFilteredData] = useState([]);

    const FetchData = () => {
        fetch("http://localhost:8000/Attendence")
            .then((res) => res.json())
            .then((res) => {
                setData(res);
                setFilteredData(res); 
            });
    };

    const HandleOnchange = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        FetchData();
    }, []);

    const handleDropdownChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedRange(selectedValue);

        if (selectedValue) {
            const startDate = (selectedValue - 1) * 7 + 1;
            const endDate = selectedValue * 7;
            const filtered = data.filter((record) => {
                const recordDate = new Date(record.date).getDate();
                return recordDate >= startDate && recordDate <= endDate;
            });
            setFilteredData(filtered);
        } else {
            
            setFilteredData(data);
        }
    };

    const HandleSearch = () => {
        const filtered = data.filter((record) => {
            return record.name.toLowerCase().includes(search.toLowerCase());
        });
        setFilteredData(filtered);
    };

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

                    <TextField sx={{ background: "white", position: "relative", bottom: "20px", left: "15px" }} variant="outlined" label="search here......." onChange={HandleOnchange} value={search} />

                    <Button sx={{ height: "56px", m: "20px" }} variant="contained" onClick={HandleSearch}>
                        <SearchIcon />
                    </Button>

                    <DateMenu handleDropdownChange={handleDropdownChange} selectedRange={selectedRange} />

                </Box>

                <TableData data={filteredData}/> 

            </Card>
        </>
    );
};

export default Supervisor;
