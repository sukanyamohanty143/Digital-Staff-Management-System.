import React, { useState, useEffect } from "react";
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";
import TableData from "./Table";

function SupervisorPage() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const [filterdata, setFilterdata] = useState([])

    const fetchData = () => {
        fetch("http://localhost:8000/Attendence")
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            })
            .catch((error) => {
                console.log("error")
            });
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleChange = (e) => {
        setSearch(e.target.value);
    }

    const handleSearch = () => {

        setSearch("")

        const filteredData = data.filter(item => item.name.toLowerCase() === search.toLowerCase() || item.attendance.toLowerCase() === search.toLowerCase() || item.date.toLowerCase() === search.toLowerCase());
        setFilterdata(filteredData)
       
    }
    console.log(filterdata, "filteredData");
    return (
        <>
            <Card container justifyContent="center" style={{ backgroundColor: "#337CCF" ,height:"80px"}}>
                <CardContent>
                    <Grid
                        align="center"
                        container
                        direction="column"
                        justify="center"
                        spacing={0}
                    >
                        <Grid item>

                            <TextField
                                error
                                id="outlined-error"
                                label="Search bar....."

                                onChange={handleChange}
                                value={search}
                                

                            />

                            <Button

                                variant="contained"

                                style={{ fontSize: "16px", marginLeft: "5px", height: "50px" }}

                                color="primary"

                                onClick={handleSearch}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>Search

                            </Button>


                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

            <TableData data={filterdata} />


        </>
    )
}

export default SupervisorPage;