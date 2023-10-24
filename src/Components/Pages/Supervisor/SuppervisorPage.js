import TableData from "./TableData";
import { useState, useEffect } from "react";

import { Card, Grid, Button, TextField, CardContent } from "@material-ui/core";
function SupervisorPage() {

    const [data, setData] = useState(null);
    const [search, setSearch] = useState('');

    const [filteredData, setFilteredData] = useState([]);

    const FetchData = () => {
        fetch("http://localhost:3000/Attendence")
            .then((res) => res.json())
            .then((res) => {
                setData(res);
            });
    };

    const HandlerChange = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {

        FetchData();

    }, []);

    const handleSearch = () => {

        const filtered = data

            ? data.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) || item.attendan1e.toLowerCase().includes(search.toLowerCase()) || item.date.toLowerCase().includes(search.toLowerCase()))

            : [];

        setFilteredData(filtered);


    }

    return (
        <>


            <Card container

                justifyContent="center" style={{ backgroundColor: 'rgb(80, 80, 244' }}>

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

                                label="Sreach Bar..."

                                onChange={HandlerChange}
                                value={search}
                                style={{ background: "white", width: "30%", height: "50px", borderRadius: "20px", }}


                            />

                            <Button onClick={handleSearch} variant="contained" style={{ fontSize: "16px", marginLeft: "5px", height: "50px" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" /></svg>Sreach

                            </Button>
                        </Grid>

                    </Grid>

                </CardContent>
            </Card>

            <TableData filteredData={filteredData} />

        </>
    );
}

export default SupervisorPage;
