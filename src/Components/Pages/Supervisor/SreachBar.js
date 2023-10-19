import { Typography, Grid, TextField, Button } from "@mui/material";
function SreachBar() {


    return(

        <>
        
            <Grid container xs={12} item spacing={2} justifyContent="center" style={{ backgroundColor:"#011627"}} >
                <Grid item lg={3} sm={6} xs={12}><Typography variant="h4" style={{color:"white"}}>Supervisor </Typography></Grid>
                <Grid item lg={2} sm={6} xs={12}></Grid>
                <Grid item lg={4} sm={6} xs={12}><TextField  variant="standard"  style={{ backgroundColor: "white" ,width:"80%",position:"relative",bottom:"9px"}} label="Sreach Here...."></TextField><Button variant="contained" style={{ fontSize: "18px" ,position:"relative",bottom:"2px"}}>Add</Button></Grid>
                
            </Grid>
        </>
    )
}
export default SreachBar;