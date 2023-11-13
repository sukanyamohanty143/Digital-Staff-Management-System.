import {Button, Stack } from '@mui/material';
function Logout() {
    return (
        <>
            <Stack direction="row" spacing={1} sx={{ marginLeft: 'auto' }}>
                <Button color="inherit" style={{ border: '1px solid white' }}>
                    Logout
                </Button>
            </Stack>
        </>
    )
}
export default Logout;