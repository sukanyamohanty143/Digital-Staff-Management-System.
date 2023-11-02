import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import user from "../assets/user.png"
import { Typography, Button, Grid } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import AppBar from '@mui/material/AppBar';

function Home() {

    const navigate = useNavigate();
    const goToRegistration = () => {
        navigate("/registration")
    }

    return (
        <>
            <AppBar position="static" style={{ padding: "20px", height: "75px" }}>
                <Typography variant="h6" color="inherit" component="div">
                    Digital Staff Managment System
                </Typography>
            </AppBar>


            <Card className='card' >
                <CardContent>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <img className="images" src={user} alt="no images" style={{ width: "400px" }} />
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant='h4' style={{ margin: "20px" }} className='typing-animation '>Welcome User ❤️</Typography>
                            <Typography variant='h5' style={{ margin: "20px" }} > Hello Friendes,👋</Typography>
                            <p style={{ padding: "10px", margin: "10px" }}> Welcome to our platform! We are delighted to have you here. At Digital staff Management System, we strive to provide an exceptional experience for our users, and we're excited to have you join our community.</p>
                            <Button
                                style={{ margin: "20px" }}
                                size="small"
                                onClick={goToRegistration}
                                variant="contained"
                            >
                                Go to next
                                <ArrowForwardIosIcon />
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}
export default Home;











