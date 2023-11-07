import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import user from "../assets/user.png"
import { Typography, Grid, Link } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

function Home() {

    const navigate = useNavigate();
    const goToRegistration = () => {
        navigate("/registration")
    }

    return (
        <>
            <Typography variant='h4' style={{ textAlign: "center", marginTop: "40px" }} className='welcometext'>Welcome to Digital Staff Managment System</Typography>
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
                            
                            <Link
                                style={{ margin: "20px" }}
                                underline={'hover'}
                                size="small"
                                onClick={goToRegistration}
                                variant="contained"
                            >
                                Go To Register Yourself<ArrowForwardIosIcon />

                            </Link>

                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>
    );
}
export default Home;











