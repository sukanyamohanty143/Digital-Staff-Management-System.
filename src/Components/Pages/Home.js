
import user from "../assets/user.png"
import { Typography, Grid, Button, Stack } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function Home() {

    const navigate = useNavigate();
    const goToRegistration = (designation) => {
        console.log("Navigating to registration with designation:", designation);

        navigate("/registration", { state: { designation } });
    }
    return (
        <>

            <Typography variant='h4' style={{ textAlign: "center", marginTop: "40px" }} className='welcometext'>Welcome to Digital Staff Managment System</Typography>

            <Card className='card'>
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid xs={6}>
                            <img src={user} alt="no images" style={{ width: "380px", margin: "30px" }} />
                        </Grid>
                        <Grid xs={6}>
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
                </CardContent>
            </Card>


        </>
    );
}
export default Home;









