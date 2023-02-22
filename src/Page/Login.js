import { Box, Button, Typography } from '@mui/material';
import React, {  } from 'react'

import { signInWithPopup, GoogleAuthProvider, getAuth } from 'firebase/auth'


import { useNavigate } from 'react-router-dom';



export default function Login() {
    const auth = getAuth();
    const navigate = useNavigate();

    const handleLoginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const res = await signInWithPopup(auth, provider);
        if(res){
            navigate('/');
        }

    }
    return (
        <>
            <Box sx={{ height: '500px', weight: '1500px',display:'flex',justifyContent:'center',alignItems:'center' ,flexDirection:'column'}}>

                <Typography variant='h5' sx={{ mb: '10px' }}> WellCome TeamBook</Typography>
                <Button variant="outlined" onClick={handleLoginWithGoogle}>
                    Login With Google
                </Button>
            </Box>
        </>
    )
}
