// import { Avatar, Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import NavBar from '../component/NavBar'
// import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ScrollBox from '../component/ScrollBox';
import CoverImageAndAvata from '../component/CoverImageAndAvata';
import { Box, Grid } from '@mui/material';
import LeftBar from '../component/LeftBar';
import Status from '../component/Status';

export default function PersionlPage() {
    return (
        <>
            <NavBar />
            <ScrollBox sx={{ maxHeight: 700 }}>
                <CoverImageAndAvata/>
                <Box sx={{width:'90%',pl:'5%'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <LeftBar/>
                        </Grid>
                        <Grid item xs={6}>
                            <Status/>
                        </Grid>
                    </Grid>
                </Box>
            </ScrollBox>
        </>
    )
}
