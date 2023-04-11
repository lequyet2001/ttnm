import { Avatar, Box, Button, Grid, Tooltip, IconButton, Menu, MenuItem, Typography, Link } from '@mui/material'
import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import CustomTextField from './CustomTextField';

import Autocomplete from '@mui/material/Autocomplete';

const ListFriend = [
    {name:'Lê Quyết',type:'Friend'},
    {name:'Lê Phú Quý',type:'Friend'},
    {name:'Nhuyễn Văn Lạ',type:'Friend'},
    {name: 'Nguyễn Thị P',type:'Friend'},
    {name:'Lớp ttnm',type:'Class'},
    {name:'Lớp nmcntt',type:'Class'},
    {name:'Lớp lsd',type:'Class'},
    {name:'Lớp pldc',type:'Class'},
    {name:'Lê Quyết',type:'Friend'},
    {name:'Lê Phú Quý',type:'Friend'},
    {name:'Nhuyễn Văn Lạ',type:'Friend'},
    {name: 'Nguyễn Thị P',type:'Friend'},
    {name:'Lớp ttnm',type:'Class'},
    {name:'Lớp nmcntt',type:'Class'},
    {name:'Lớp lsd',type:'Class'},
    {name:'Lớp pldc',type:'Class'},
    {name:'Lê Quyết',type:'Friend'},
    {name:'Lê Phú Quý',type:'Friend'},
    {name:'Nhuyễn Văn Lạ',type:'Friend'},
    {name: 'Nguyễn Thị P',type:'Friend'},
    {name:'Lớp ttnm',type:'Class'},
    {name:'Lớp nmcntt',type:'Class'},
    {name:'Lớp lsd',type:'Class'},
    {name:'Lớp pldc',type:'Class'},
];

export const Item = styled(Paper)(({ theme, color, boderRadius, left }) => ({
    backgroundColor: color/*theme.palette.mode === 'dark' ? '#1A2027' : '#fff'*/,
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // paddingLeft:'10px',
    textAlign: 'flex-start',
    borderRadius: boderRadius,
    color: theme.palette.text.secondary,
    left: left
}));

const settings = ['Profile', 'Account', ''];


export default function NavBar() {
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    return (

        <Grid container item xs={12}
            direction="row"
            justifyContent="space-between"
            alignItems='center'
        >
            <Grid item xs={1} sx={{ marginLeft: '20px' }} >

                <Button   sx={{ backgroundColor: 'white', left: '15px' }} >
                    <Link href='/'> 
                    Logo
                    </Link>
                </Button>

            </Grid>
            <Grid item xs={8} >
                    <Autocomplete
                        id="outlined-basic fullWidth free-solo-demo"
                        variant='outlined'
                        freeSolo
                        options={ListFriend.map((option) => option.name+' - '+option.type)}
                        renderInput={(params) => <CustomTextField {...params} label="Search" 
                        sx={{ left: '140px' }}
                        />}
                    />
            </Grid>
            <Grid item xs={1}>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, left: '45px' }}>
                            {/* <Avatar alt="Remy Sharp" src="/src/images/avata.png" /> */}
                            <Avatar sx={{ width: 55, height: 55 }}>K</Avatar>
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                <Typography textAlign="center">
                                    {
                                        setting==='Logout'? <Link href='/login'  >{setting}</Link>:setting
                                    }
                               
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Box>

            </Grid>
        </Grid>

    )
}
