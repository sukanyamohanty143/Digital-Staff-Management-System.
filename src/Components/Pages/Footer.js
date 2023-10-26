import { Typography, AppBar, Grid, Stack } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <>
            <AppBar position="static" style={{ padding: "20px", height: "155px", marginTop: "90px" }}>
                <Typography variant="h6" color="inherit" component="div">
                    <Stack className="fottercontainer">
                        <Grid container spacing={1}>
                            <Grid item xs={4}>
                                <Typography variant='h5' style={{ margin: "15px" }} >
                                    <TwitterIcon style={{ marginLeft: "5px" }} />
                                    <FacebookIcon style={{ marginLeft: "5px" }} />
                                    <LinkedInIcon style={{ marginLeft: "5px" }} />
                                </Typography>
                            </Grid>

                            <Grid item xs={8}>
                                <p className="footer-text">© 2023 Digital Staff Managment System</p>
                            </Grid>
                        </Grid>
                    </Stack>
                </Typography>
            </AppBar>
        </>
    )
}
export default Footer;
