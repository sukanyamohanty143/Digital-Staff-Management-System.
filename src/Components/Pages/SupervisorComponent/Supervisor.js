import TableData from "./Table";
import React, { useEffect, useState } from "react";
import DateMenu from "./DateMenu";
import {
    Box,
    Card
} from "@mui/material";

import SearchBar from "./SearchBar";

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
        setSearch("")
        const filtered = data.filter((record) => {
            return record.name.toLowerCase().includes(search.toLowerCase());
        });
        setFilteredData(filtered);
    };

    return (
        <>
            <Card sx={{ m: '10rem', boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", position: "relative", bottom: "60px" }}>

                <Box
                    m={1}
                    display="flex"
                    justifyContent="flex-end"
                    alignItems="flex-end"
                >
                    <DateMenu handleDropdownChange={handleDropdownChange} selectedRange={selectedRange} />
                    <SearchBar HandleOnchange={HandleOnchange} search={search} HandleSearch={HandleSearch} />
                </Box>
                <TableData data={filteredData} setFilteredData={setFilteredData} />

            </Card>
        </>
    );
};

export default Supervisor;