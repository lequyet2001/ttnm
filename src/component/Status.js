import { Grid, Avatar, Typography, Box, IconButton, List, ListItem, ListItemIcon, ListItemText, Button, Link } from '@mui/material'
import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
// import { Item } from './NavBar';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReplyIcon from '@mui/icons-material/Reply';



export default function Status() {




    return (
        <Box sx={{
            backgroundColor: 'white',
            height: 'auto',
            width: '1000px',

        }}>
            <Grid container sx='repead(3,1fr)'
                padding='20px'

            >
                <Grid item xs='1fr' sx={{ paddingRight: '5px' }}>
                    <Avatar sx={{ width: 55, height: 55 }}>Q</Avatar>
                </Grid>
                <Grid item container xs={1}>
                    <Grid item xs={12}>
                        <Typography variant='body2' color='black'>
                            <Link
                                href='/persion'
                                underline='hover'
                            >
                            Lê Quyết
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='caption'>
                            1 Giờ
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={10}
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'center',

                    }}
                >
                    <IconButton aria-label="delete" size='lage'
                        sx={{
                            left: '50px',
                            borderRadius: '10px',
                            paddingLeft: '10px'
                            //  backgroundColor:'green',


                        }}>
                        <MoreHorizIcon fontSize="inherit"
                            sx={{
                                '&:hover': {
                                    color: 'primery'
                                }
                            }} />
                    </IconButton>
                    <IconButton aria-label="delete" size='lage'
                        sx={{
                            left: '50px',
                            borderRadius: '10px',
                            //  backgroundColor:'green',


                        }}>
                        <ClearIcon fontSize="inherit"
                            sx={{
                                '&:hover': {
                                    color: 'red'
                                }
                            }} />
                    </IconButton>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='body2' color='black'>
                        ́8 năm ra trường
                        <br />
                        <br />
                    </Typography>
                    <img
                        style={{ width: 950, height: 600, }}

                        alt='my avata'
                        src='https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/326472253_2386641358161093_7837015267632208779_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=C5qXz1KLO-kAX-boOCV&_nc_ht=scontent.fhan15-1.fna&oh=00_AfAhkW7ZzXpUmNlJmwkeygTmY5hjIsZ-45EELCUfdAxsJg&oe=63F1B0F5'
                    />
                </Grid>
                <Grid item container xs={12}>
                    <Grid item xs={8}>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <ThumbUpIcon />
                                    <TagFacesIcon />
                                    <SentimentVeryDissatisfiedIcon />
                                </ListItemIcon>
                                <ListItemText primary="11K" />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={4} container>
                        <List sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            // alignItems:"center"  
                            left: '60px'
                        }}>
                            <ListItem>
                                <ListItemText primary="11K Bình luận" sx={{ width: '100px' }} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="3M Chia sẻ" sx={{ width: '100px' }} />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ border: '1px black solid' }} />
                </Grid>
                <Grid item xs={12}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            '& > *': {
                                m: 1,
                            },
                        }}
                    >
                        <Button >
                            <ThumbUpIcon />
                            <Typography sx={{ paddingLeft: '5px' }}> Thích </Typography>
                        </Button>
                        <Button >
                            <ChatBubbleOutlineIcon />
                            <Typography sx={{ paddingLeft: '5px' }}> Bình luận</Typography>
                        </Button>
                        <Button >
                            <ReplyIcon />
                            <Typography sx={{ paddingLeft: '5px' }}> Chia sẻ</Typography>
                        </Button>
                    </Box>
                </Grid>
            </Grid>



        </Box>
    )
}
