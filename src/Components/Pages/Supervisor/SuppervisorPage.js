<<<<<<< HEAD
=======

>>>>>>> 10acc7abdd4941a7e2bd5af9dc8af679b57d4ccb
import { useEffect, useState } from "react";
import employeesData from './dataserver.json';

import TableData from "./TableData"
import { Grid, TextField, Button, Card, CardContent } from "@mui/material";

function SupervisorPage() {

    const employees = employeesData.employees;

    const [data, setData] = useState([])

    useEffect(() => {

        setData(employees)

    }, [employees])

<<<<<<< HEAD


    const [sreach, setSreach] = useState('')

    const [filterArr, setFilterArr] = useState([])

    const HandlerChange = (e) => {
        setSreach(e.target.value)
    }

    const filterData = data.filter(item => {
        return item.designation === sreach || item.FirstName === sreach || item.LastName === sreach || item.Mobile === sreach || item.attendance === sreach || item.date === sreach || item.Gender === sreach;
    })

    const HandlerAddButton = () => {

        setSreach('')

        setFilterArr([filterArr, ...filterData])
    }

    console.log(filterArr, "filterdata")

    console.log(data, "data")

=======


    const [sreach, setSreach] = useState('')

    const [filterArr, setFilterArr] = useState([])

    const HandlerChange = (e) => {
        setSreach(e.target.value)
    }

    const filterData = data.filter(item => {
        return item.designation === sreach || item.FirstName === sreach || item.LastName === sreach || item.Mobile === sreach || item.attendance === sreach || item.date === sreach || item.Gender === sreach;
    })

    const HandlerAddButton = () => {

        setSreach('')

        setFilterArr([filterArr, ...filterData])
    }

    console.log(filterArr, "filterdata")

    console.log(data, "data")

>>>>>>> 10acc7abdd4941a7e2bd5af9dc8af679b57d4ccb


    return (
        <>

            <Card container
                justifyContent="center" style={{ backgroundColor: ' #3a0ca3' }}>
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
                                label="Sreach User....."
                               onChange={HandlerChange}
                               value={sreach}

                            />

                            <Button onClick={HandlerAddButton} variant="contained" color="error" style={{fontSize:"23px",marginLeft:"5px"}}>
                                Sreach
                            </Button>
                        </Grid>

                    </Grid>

                </CardContent>
            </Card>

            <TableData filterArr={filterArr}/>



        </>
    )
}
export default SupervisorPage;

