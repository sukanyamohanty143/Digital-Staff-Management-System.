import React, { useState, useEffect } from 'react';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAuth from './Context/useAuth';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import TaskIcon from '@mui/icons-material/Task';


const Profileavtar = () => {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log("user data", user)
    const navigate = useNavigate();
    
    const { user: authUser } = useAuth();

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (option) => {
        if (option === 'login') {
            localStorage.clear()
            if (authUser) {
                console.log("User successfully logged out from Firebase");
            } else {
                console.error("User not authenticated.");
            }
        }else {
            
            navigate(`/${option}`);
        }
        setSelectedOption(option);
        handleMenuClose();
    };

    useEffect(() => {
        if (selectedOption) {
            console.log("location", selectedOption);
            navigate(`/${selectedOption}`);
        }
    }, [selectedOption, navigate]);

    return (
        <div>
            <Avatar
                src={user?.avatar || user?.profilePhotoURL}
                alt="User Avatar"
                onClick={handleMenuOpen}
                style={{ cursor: 'pointer' }}
            />
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={() => handleMenuItemClick('outer')}><AccountCircleIcon style={{marginRight:"10"}}/>Profile</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('usertask')}><TaskIcon style={{marginRight:"10"}} />Task</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('login')}><LogoutIcon style={{marginRight:"10"}} />Logout</MenuItem>

            </Menu>


        </div>
    );
};

export default Profileavtar;