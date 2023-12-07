import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Stack } from '@mui/material';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import Logout from './LoginButton';
import Profileavtar from './Profileavtar';
import { useLocation } from 'react-router-dom';
import Notifications from './notifications';

export default function Header(props) {
    const location = useLocation();
    const currentRoute = location.pathname;

    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <CoPresentIcon />
                </IconButton>
                <Typography variant='h5' className='digital'>
                    Digital Staff Management System
                </Typography>
                <Stack direction="row" spacing={2} sx={{ marginLeft: 'auto'}}>                    
                    
                    {currentRoute === '/' ? (
                        <Logout />
                    ) : currentRoute.includes('/registration') || currentRoute.includes('/login')? null : (
                        <>
                              <IconButton color='inherit'>
                                  <Profileavtar />
                                  <Notifications  {...props}/>
                              </IconButton>
                        </>
                    )}
                </Stack>
            </Toolbar>
        </AppBar>
    )
}