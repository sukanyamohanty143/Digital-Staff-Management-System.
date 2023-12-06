
import { useNavigate } from 'react-router-dom';
import { Typography, Grid, Button, Stack, Box } from "@mui/material";
import user from "../assets/user.png";


function Home() {
    const navigate = useNavigate();
    const goToRegistration = (designation) => {
        console.log("Navigating to registration with designation:", designation);
        navigate("/registration", { state: { designation } });
    }

    return (
        <>
            <Typography variant='h4' style={{ textAlign: "center", marginTop: "40px" }} className='welcometext'>Welcome to Digital Staff Managment System</Typography>

            <Box sx={{ width: "100%", maxWidth: "1100px", margin: "auto", marginTop: "50px" }}>
                <Grid container spacing={2} className='card'>
                    <Grid item md={6} sm={12} xs={12} >
                        <Box
                            component="img"
                            src={user}
                            alt="no images"
                            sx={{
                                width: "100%",
                                maxWidth: "380px",
                                margin: "30px",
                            }}
                        />
                    </Grid>

                    <Grid item md={6} sm={12} xs={12} style={{ backgroundColor: "white" }}>
                        <Typography variant='h4' style={{ margin: "20px" }} className='typing-animation '>Welcome User ❤️</Typography>
                        <Typography variant='h5' style={{ margin: "20px" }} > Hello Friendes,👋</Typography>
                        <p style={{ padding: "10px", margin: "10px" }}> Welcome to our platform! We are delighted to have you here. At Digital staff Management System, we strive to provide an exceptional experience for our users, and we're excited to have you join our community.</p>
                        <Typography
                            style={{ margin: "20px" }}
                            underline={'hover'}
                            size="small"
                            variant='h6'
                        >
                            Register Yourself For.....
                        </Typography>
                        <Stack spacing={1} direction="row">
                            <Button variant="contained" onClick={() => goToRegistration('staff')} >Staff</Button>
                            <Button variant="contained" onClick={() => goToRegistration('admin')} >Admin</Button>
                            <Button variant="contained" onClick={() => goToRegistration('supervisor')} >Supervisor</Button>
                        </Stack>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
export default Home;



