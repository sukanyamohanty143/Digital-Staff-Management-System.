import { Typography, Grid, TextField, Button } from "@mui/material";

import { useState } from "react";
// import { useState } from "react";

function SreachBar({ employeesdata }) {
<<<<<<< HEAD

    const [sreach, setSreach] = useState('')

    const [filterArr, setFilterArr] = useState([])
=======

    const [sreach, setSreach] = useState('')

    const [filterArr,setFilterArr]=useState([])

>>>>>>> 31ca269e021035c066108a9f6e3f198f5ca9b5a1

    const HandlerChange = (e) => {
        setSreach(e.target.value)
    }


    const filterData = employeesdata.filter(item => {

<<<<<<< HEAD

        return item.designation === sreach || item.FirstName === sreach || item.LastName === sreach || item.Mobile === sreach || item.attendance === sreach || item.date === sreach || item.Gender === sreach;


    })

    const HandlerAddButton = () => {

        setSreach('')

        setFilterArr([...filterArr, ...filterData])
    }

    console.log(filterArr, "filterdata")

=======
        return item.designation === sreach || item.FirstName === sreach || item.Date === sreach || item.LastName === sreach || item.Mobile === sreach || item.Gender == sreach;

    })
    const HandlerFilterArr=()=>{

        setFilterArr([...filterArr,filterData])
    }
    

    console.log(filterArr)

    console.log(filterData, "filterdata")

>>>>>>> 31ca269e021035c066108a9f6e3f198f5ca9b5a1
    return (

        <>

<<<<<<< HEAD
            
=======


>>>>>>> 31ca269e021035c066108a9f6e3f198f5ca9b5a1
            <Grid container xs={12} item spacing={2} justifyContent="center" style={{ backgroundColor: "#011627" }} >

                <Grid item lg={3} sm={6} xs={12}><Typography variant="h4" style={{ color: "white" }}>Supervisor </Typography></Grid>

                <Grid item lg={2} sm={6} xs={12}></Grid>

<<<<<<< HEAD
                <Grid item lg={4} sm={6} xs={12}><TextField onChange={HandlerChange} value={sreach} variant="standard" style={{ backgroundColor: "white", width: "80%", position: "relative", bottom: "9px" }} label="Sreach Here...."></TextField><Button onClick={HandlerAddButton} variant="contained" style={{ fontSize: "18px", position: "relative", bottom: "8px" }}>Add</Button></Grid>

            </Grid>

          






=======
                <Grid item lg={4} sm={6} xs={12}><TextField onChange={HandlerChange} variant="standard" style={{ backgroundColor: "white", width: "80%", position: "relative", bottom: "9px" }} label="Sreach Here...."></TextField><Button onClick={HandlerFilterArr} variant="contained" style={{ fontSize: "18px", position: "relative", bottom: "8px" }}>Add</Button></Grid>

            </Grid>

>>>>>>> 31ca269e021035c066108a9f6e3f198f5ca9b5a1

        </>
    )
}
export default SreachBar;



// FirstName
// : 
// "John"
// Gender
// : 
// "Male"
// LastName
// : 
// "Doe"
// Mobile
// : 
// "1234567890"
// attendance
// : 
// "persent"
// date
// : 
// "1-10-2023"
// designation
// : 
// "Admin"
// [[Prototype]]
// : 
// Object
// length
// : 
// 1
// [[Prototype]]
// : 
// Ar