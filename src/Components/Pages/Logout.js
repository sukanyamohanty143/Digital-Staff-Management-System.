// import {Button, Stack } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
// function Logout() {

//     return (
//         <>
//             <Stack direction="row" spacing={1} sx={{ marginLeft: 'auto' }}>
//                 <Button color="inherit" style={{ border: '1px solid white' }}>
//                     Logout
//                 </Button>
//             </Stack>
//         </>
//     )
// }
// export default Logout;



import { Button, Stack } from '@mui/material';
import React from 'react';

function Logout() {

  return (
    <Stack direction="row" spacing={1} sx={{ marginLeft: 'auto' }}>
      <Button color="inherit" style={{ border: '1px solid white' }} >
        Logout
      </Button>
    </Stack>
  );
}

export default Logout;
