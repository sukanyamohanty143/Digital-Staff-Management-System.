import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Stack} from '@mui/material';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import Logout from './Logout';
import Profileavtar from './Profileavtar'

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

                <Stack direction="row" spacing={2} sx={{ marginLeft: 'auto'}}>
                    <Profileavtar/>
                    <Logout/>
                </Stack>

            </Toolbar>
        </AppBar>
    )
}
