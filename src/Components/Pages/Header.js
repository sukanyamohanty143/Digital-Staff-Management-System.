
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button ,Stack} from '@mui/material';
import CoPresentIcon from '@mui/icons-material/CoPresent';

export default function Header() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <CoPresentIcon />
                </IconButton>
                <Typography variant='h5' className='digital'>
                    Digital Staff Management System
                </Typography>

                <Stack style={{ marginLeft: 'auto' }}>
                    <Button color="inherit" style={{ border: '2px solid white'}}>
                        Logout
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
