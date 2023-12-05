
import React from 'react';
import { Typography, AppBar, Grid, Stack, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const footerStyle = {
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#337CCF',
        padding: '20px',
        width: '100%',
    };

    const iconStyle = {
        fontSize: isMobile ? 24 : 32,
        color: 'white',
        marginRight: isMobile ? '20px' : '40px',
    };

    return (
        <>
            <AppBar position="static" style={footerStyle}>
                <Typography variant="h6">
                    <Stack className="footer-container">
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={4}>
                                <Typography variant="h5" style={{ margin: isMobile ? '15px 0' : '15px' }}>

                                    <Tooltip title="This is icon for style" placement={isMobile ? 'top' : 'top-end'} arrow>
                                        <TwitterIcon style={iconStyle} />
                                    </Tooltip>

                                    <Tooltip title="This is icon for style">
                                        <FacebookIcon style={iconStyle} />
                                    </Tooltip>

                                    <Tooltip title="This is icon for style" placement={isMobile ? 'top' : 'top-start'}>
                                        <LinkedInIcon style={iconStyle} />
                                    </Tooltip>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={8}>
                                <p className="footer-text">
                                    © 2023 Digital Staff Management System
                                </p>
                            </Grid>
                        </Grid>
                    </Stack>
                </Typography>
            </AppBar>
        </>
    );
}

export default Footer;







