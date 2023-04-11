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
            // padding:'10px'

        }}>
            <Grid container sx='repead(3,1fr)'
                padding='20px'
                // margin={1}

            >
                <Grid item xs='1fr' sx={{ paddingRight: '5px' }}>
                    <Avatar sx={{ width: 55, height: 55 }}>K</Avatar>
                </Grid>
                <Grid item container xs={1}>
                    <Grid item xs={12}>
                        <Typography variant='body2' color='black'>
                            <Link
                                href='/persion'
                                underline='hover'
                            >
                                Lê Kiên
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Box  onMouseEnter={(e)=>{return <p>asdas</p>}} sx={{'&:hover':{color:'black'}}}>

                            <Typography  >
                                1 Giờ
                            </Typography>
                        </Box>
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
                            left: '40px',
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
                            left: '40px',
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
                       
                        <br />
                        <br />
                    </Typography>
                    <img
                        style={{ width: 950, height: 600, }}

                        alt='my avata'
                        src='https://znews-photo.zingcdn.me/w1920/Uploaded/qhj_yvobvhfwbv/2018_07_18/Nguyen_Huy_Binh1.jpg'
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
