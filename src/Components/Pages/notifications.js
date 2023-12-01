import React, { useState, useEffect } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Notifications = ({ notificationCount, notificationMessage }) => {
  const [isNotificationClicked, setIsNotificationClicked] = useState(false);
  useEffect(() => {
    if (notificationCount > 0 && isNotificationClicked) {
      alert(notificationMessage);
      setIsNotificationClicked(false);
    }
  }, [notificationCount, notificationMessage, isNotificationClicked]);
  const handleNotificationClick = () => {
    setIsNotificationClicked(true);
  };
  return (
    <>
      <NotificationsIcon onClick={handleNotificationClick} />
      <span>{notificationCount > 0 && `(${notificationCount})`}</span>
    </>
  );
};
export default Notifications;