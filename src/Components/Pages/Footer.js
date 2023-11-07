import React, { useState } from 'react';
import { Typography, AppBar, Grid, Stack } from '@mui/material';
import { Button, Dialog, DialogContentText, DialogContent, DialogActions } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    const [open, setOpen] = useState(false);

    const functionOpen = () => {
        setOpen(true);
    }

    const functionClose = () => {
        setOpen(false);
    }
    const footerStyle = {
        position: 'fixed', 
        bottom: 0,
        backgroundColor: '#337CCF',
        padding: '20px',
        width: '100%',
    };
    const iconStyle = {
        fontSize: 32,
        color: 'white',
        marginRight: '10px',
    };
    return (
        <AppBar position="static" style={footerStyle}>
            <Typography variant="h6">
                <Stack className="footer-container">
                    <Grid container spacing={1}>

                        <Grid item xs={4}>
                            <Typography variant="h5" style={{ margin: '15px' }}>
                                <TwitterIcon onClick={functionOpen} style={iconStyle} />
                                <FacebookIcon onClick={functionOpen} style={iconStyle} />
                                <LinkedInIcon onClick={functionOpen} style={iconStyle} />
                            </Typography>
                            
                            <Dialog open={open} maxWidth="lg">
                                <DialogContent>
                                    <DialogContentText>These are Icons for style, it's nothing will do by clicking</DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={functionClose} color="error" variant="contained">Close</Button>
                                </DialogActions>
                            </Dialog>
                        </Grid>

                        <Grid item xs={8}>
                            <p className="footer-text">
                                © 2023 Digital Staff Management System
                            </p>
                        </Grid>
                    </Grid>
                </Stack>
            </Typography>
        </AppBar>
    );
}
export default Footer;
