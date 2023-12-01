import React, { useState} from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton, Menu, MenuItem, Badge } from '@mui/material';

const Notifications = ({ notificationCount, allNotifications }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
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
        {allNotifications && allNotifications.map((message, index) => (
          <MenuItem key={index}>{message}</MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Notifications;
