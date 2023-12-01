import { Button, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
// import LoginIcon from '@mui/icons-material/Login';

function LoginButton() {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <>
            <Stack direction="row" spacing={1} sx={{ marginLeft: 'auto' }}>
                <Button color="inherit" style={{ border: '1px solid white' }} onClick={handleLoginClick}>
                 Log In 
                </Button>
            </Stack>
        </>
    );
}

export default LoginButton;
