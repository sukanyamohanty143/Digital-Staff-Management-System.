import React, { useState} from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton, Menu, MenuItem, Badge } from '@mui/material';

const Notifications = ({ notificationCount, allNotifications }) => {
    console.log(allNotifications,"kkk")
    const [anchorEl, setAnchorEl] = useState(null);
    const handleNotificationClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleMenuClose =()=>{
        setAnchorEl(null);
    };
    
    return(
        <>
            <IconButton color="inherit" onClick={handleNotificationClick}>
                <Badge badgeContent={notificationCount} color="error">
                    <NotificationsIcon />
                </Badge>
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                {allNotifications && allNotifications.map((notification, index) => (
                    <MenuItem key={index}>{notification}</MenuItem>
                ))}
            </Menu>
        </>
    );
};
export default Notifications;
