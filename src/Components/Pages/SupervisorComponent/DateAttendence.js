import { useEffect, useState } from "react";

import { TableHead, Table, TableCell, TableRow, TableContainer, Box, Card,Select,MenuItem} from "@mui/material";

const Attendence = () => {

    const [selectedRange, setSelectedRange] = useState(null);

    const [data, setData] = useState([])

    const FetchData = () => {

        fetch("http://localhost:8000/Attendence").then((res) => {

            return res.json()

        }).then((res) => {

            setData(res)

        })
    }

    useEffect(() => {
        FetchData()
    },[])


    const handleDropdownChang = (event) => {

        const selectedValue = event.target.value;
        setSelectedRange(selectedValue);
    };



    const filterAttendanceData = () => {

        const startDate = (selectedRange-1) * 7+1;
        const endDate = selectedRange * 7;

    

        return data.filter((record) => {

            const recordDate = new Date(record.date).getDate();

            if (recordDate>=startDate && recordDate<=endDate){

                return recordDate;
            }

        });
    };


    const filteredData = filterAttendanceData();

    const sortedData = filteredData.sort(function (a, b) {

        var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();

        if (nameA < nameB)
        
            return -1;

        if (nameA > nameB)

            return 1;

        return 0;
    });

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
                       

                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={selectedRange}
                            label="Date"
                            onChange={handleDropdownChang}
                        >
                            <MenuItem value="1">1-7 days</MenuItem>
                            <MenuItem value="2">8-14 days</MenuItem>
                            <MenuItem value="3">15-21 days</MenuItem>
                            <MenuItem value="4">22-30 days</MenuItem>
                        </Select>



                    </Box>


                </Box>

                <Box sx={{ m: "20px", background: "#FAEBD7" }}>

                    <TableContainer>
                        <Table>

                            <TableHead>
                                <TableRow >

                                    <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>Name</TableCell>
                                    <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>attendance</TableCell>
                                    <TableCell sx={{ textAlign: "center", fontSize: "25px" }}>Date</TableCell>
                                </TableRow>
                            </TableHead>

                            {sortedData.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell sx={{ textAlign: "center" }}>{item.name}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>{item.attendance}</TableCell>
                                    <TableCell sx={{ textAlign: "center" }}>{item.date}</TableCell>
                                </TableRow>
                            ))}
                        </Table>
                    </TableContainer>
                </Box>


            </Card>
        </>
    );
};

export default Attendence;

