import { Avatar, Button, Grid } from '@mui/material'
import React from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CustomTextField from './CustomTextField';




export const Item = styled(Paper)(({ theme, color, boderRadius }) => ({
    backgroundColor: color/*theme.palette.mode === 'dark' ? '#1A2027' : '#fff'*/,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // paddingLeft:'20px',
    textAlign: 'flex-start',
    borderRadius: boderRadius,
    color: theme.palette.text.secondary,
}));

export default function NavBar() {
    return (
     
        <Grid container item xs={12}
            direction="row"
            justifyContent="space-between"
            alignItems='center'
        >
            <Grid item xs={1} sx={{ marginLeft: '20px' }} >
                
                    <Button sx={{ backgroundColor: 'white' ,left:'15px'}} >
                        Logo
                    </Button>
               
            </Grid>
            <Grid item xs={8}>
                <CustomTextField left='0px' id="outlined-basic fullWidth" variant="outlined" fullWidth label="Search" sx={{left:'140px'}} />
            </Grid>
            <Grid item xs={1}>
                <Button size="large"
                    variant="elevated"
                    sx={{left:'45px'}}>
                    <Avatar  sx={{ width: 55, height: 55 }}>Q</Avatar>
                </Button>
            </Grid>
        </Grid>
      
    )
}
