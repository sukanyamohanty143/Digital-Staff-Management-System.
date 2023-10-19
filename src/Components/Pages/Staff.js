import React from "react";
import { Button } from "@material-ui/core";
const Staff=()=>{
    return(
        <center>
        <div>  
            <h1>Staff Management </h1>
            <label htmlFor="Name">Name   </label>
            <input type="text"/>
            <br></br><br></br>
            <label htmlFor="Attendence">Attendence   </label>

            <select>

            <option value="Attendence">Atendence</option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>

            </select><br></br><br></br>
            <label for="birthday">Date    </label>
             <input type="date" id="date" name="date"/><br></br><br></br>




            <Button variant="contained" color="primary">Sumbit</Button>
        </div>
        </center>
    )
}
export default Staff