import React, { useState, useEffect } from 'react';
import { Avatar, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const Profileavtar = ({ user }) => {
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
            if (authUser) {
                console.log("User successfully logged out from Firebase");
            } else {
                console.error("User not authenticated.");
            }
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
                src={user?.avatar}
                alt="User Avatar"
                onClick={handleMenuOpen}
                style={{ cursor: 'pointer' }}
            />
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                <MenuItem onClick={() => handleMenuItemClick('outer')}>Profile</MenuItem>
                <MenuItem onClick={() => handleMenuItemClick('login')}>Logout</MenuItem>
            </Menu>
        </div>
    );
};

export default Profileavtar;
