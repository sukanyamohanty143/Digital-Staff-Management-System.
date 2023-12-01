import React from 'react';
import { Typography, Button } from '@mui/material';

const SessionTimeout = ({ onExtendSession, onLogout }) => {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <Typography variant="h5">Your session is about to time out.</Typography>
      <Typography variant="body1">Do you want to extend your current session?</Typography>
      <div style={{ marginTop: '20px' }}>
        <Button variant="contained" color="primary" onClick={onExtendSession}>
          Extend Session
        </Button>
        <Button variant="contained" color="secondary" style={{ marginLeft: '10px' }} onClick={onLogout}>
          Logout
        </Button>
      </div>
    </div>
  );
};

export default SessionTimeout;
