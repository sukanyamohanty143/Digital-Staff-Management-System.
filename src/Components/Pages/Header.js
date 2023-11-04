import React from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material'
import CoPresentIcon from '@mui/icons-material/CoPresent';


export default function Header() {
    const appBarStyle = {
        height: "10vh"
    }
    return (
        <AppBar position='static' style={appBarStyle}>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <CoPresentIcon />
                </IconButton>
                <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
                    Digital Staff Management System
                </Typography>
            </Toolbar>
        </AppBar>
    )
}