
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import background from "../assets/background.jpg"
import { Typography, Container, Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    const goToRegistration = () => {
        // alert("colled function")
        navigate("/registration")
    }

    return (
        <>
            <div className="navbar">
                <Typography className='navigetiontitle' variant='h5'>Digital Staff Managment Systam</Typography>
            </div>
            <Typography variant='h4' style={{ textAlign: "center", margin: "20px" }}>Welcome to Staff Management Systam</Typography>
            <Container>
                <div className="container">
                    <img className="images" src={background} alt="no images" />
                </div>
                <Button
                    className="nextbutton"
                    onClick={goToRegistration}
                    variant="contained">Go to next
                    <ArrowForwardIosIcon />
                </Button>
            </Container>
        </>
    );
}
export default Home;


