import { Card, Box, Typography, TextField, Button } from "@mui/material";

function Task() {
    
    return (
        <>


            <center>

                <Card sx={{ maxWidth: 500, height: "600px", marginTop: "100px", background: "white", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", color: "white", background: "linear-gradient(19deg, #FAACA8 0%, #DDD6F3 80%)" }} className='signup'>
                    <Typography style={{ position: "relative", top: "30px", fontSize: "30px", color: "#83b7d3" }}>Task Triumph</Typography>
                    <Box sx={{ boder: "1px solid red", width: "80%", height: "450px", background: "red", position: "relative", m: "5px", top: "50px", borderRadius: "40px", background: "rgba(255,255,255, .4)" }}>
                        <TextField id="outlined-basic" label="Search..." variant="outlined" sx={{ width: "70%", position: "relative", top: "20px", background: "white" }} />
                        <Button variant="contained" sx={{ m: "5px", width: "20px", position: "relative", top: "15px", height: "55px" }}>add</Button>

                    </Box>
                </Card>

            </center >
        </>
    );
}

export default Task;
