import React from 'react'
import { Avatar, Box, Button, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Item } from '../component/NavBar'
import AddIcon from '@mui/icons-material/Add';
import MessageIcon from '@mui/icons-material/Message';

export default function CoverImageAndAvata() {
    return (
        <>
            <Box sx={{
                width: '90%',
                paddingLeft: '5%'
            }} >
                <Box sx={{
                    backgroundImage: 'url("https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/326472253_2386641358161093_7837015267632208779_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=C5qXz1KLO-kAX-boOCV&_nc_ht=scontent.fhan15-1.fna&oh=00_AfAhkW7ZzXpUmNlJmwkeygTmY5hjIsZ-45EELCUfdAxsJg&oe=63F1B0F5")',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'flex-start',
                    width: '100%',
                    height: '400px',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',

                }}>
                    <Button sx={{
                        left: '-50px',
                        backgroundColor: 'white',
                        top: '20px',
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
                    <Box>
                        <Typography variant='h4' sx={{
                            paddingTop: '20px',
                            paddingLeft: '150px',
                            display: 'flex',
                            flexDirection: 'col'

                        }}>
                           Kieen
                        </Typography>
                        <Box>
                            <IconButton size='lage' sx={{
                                left: '100px',
                                backgroundColor: 'grey',
                                // top: '30px',
                                '&:hover': {
                                    backgroundColor: 'grey'
                                }
                            }}>
                                <PhotoCameraIcon />
                            </IconButton>
                        </Box>
                        <Box>
                            <List>
                                <ListItem sx={{
                                    left: '880px'
                                }}>
                                    <ListItemButton sx={{
                                        borderRadius: '10px',
                                        paddingRight: '10px',
                                        '&:hover':
                                        {
                                            backgroundColor: 'blue'
                                        }
                                    }}>
                                        <AddIcon color='white' sx={{ paddingRight: '10px' }} />
                                        <ListItemText color='white'> Thêm Bạn</ListItemText>
                                    </ListItemButton>
                                    <ListItemButton sx={{
                                        borderRadius: '10px',
                                        paddingRight: '10px',
                                        '&:hover':
                                        {
                                            backgroundColor: 'blue'
                                        }
                                    }}>
                                        <MessageIcon color='white' sx={{ paddingRight: '10px' }} />
                                        <ListItemText color='white'>  Nhắn tin</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ border: '1px black solid' }} />

            </Box>
        </>
    )
}
