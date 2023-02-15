import React from 'react'
import { Avatar, Box, Button, IconButton, Typography } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Item } from '../component/NavBar'


export default function CoverImageAndAvata() {
    return (
        <>
            <Box >
                <Box sx={{
                    backgroundImage: 'url("https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/326472253_2386641358161093_7837015267632208779_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=C5qXz1KLO-kAX-boOCV&_nc_ht=scontent.fhan15-1.fna&oh=00_AfAhkW7ZzXpUmNlJmwkeygTmY5hjIsZ-45EELCUfdAxsJg&oe=63F1B0F5")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'flex-start',
                    width: '100%',
                    height: '400px',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',

                }}>
                    <Button sx={{
                        left: '-50px',
                        backgroundColor: 'white',
                        top: '-20px',
                        '&:hover': {
                            backgroundColor: 'white',
                        }
                    }}>
                        <PhotoCameraIcon />
                        <Typography>
                            Đổi ảnh nền
                        </Typography>
                    </Button>
                </Box>
                <Box sx={{
                    display: 'flex',
                    left: '100px'
                }}>
                    <IconButton sx={{
                        left: '150px',
                        top: '-60px'

                    }}>
                        <Item boderRadius='100px'>
                            <Avatar
                                style={{ width: 200, height: 200, }}
                                alt='my avata'
                                src='https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/326472253_2386641358161093_7837015267632208779_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=C5qXz1KLO-kAX-boOCV&_nc_ht=scontent.fhan15-1.fna&oh=00_AfAhkW7ZzXpUmNlJmwkeygTmY5hjIsZ-45EELCUfdAxsJg&oe=63F1B0F5'
                            />
                        </Item>
                    </IconButton>
                    <Box >

                        <Typography variant='h4' sx={{
                            paddingTop: '20px',
                            paddingLeft: '150px',
                            display: 'flex',
                            flexDirection: 'col'

                        }}>
                            Lê Quyết
                        </Typography>
                        <IconButton sx={{
                            left: '100px',
                            backgroundColor: 'grey',
                            top: '25px'
                        }}>
                            <PhotoCameraIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
