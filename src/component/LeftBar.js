import { Box, Button, DialogContent, DialogTitle, Typography, Link } from '@mui/material'
import { React, } from 'react'
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ScrollBox from './ScrollBox';
import Chat from './Chat';
import { Item } from './NavBar';



const style = {
    button: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: 'black',
        borderRadius: '10px',
        '&:hover': {
            backgroundColor: 'blue',
            opacity: [0.9, 0.8, 1],
        },
        width: '200px',
        height: '40px',
        marginBottom: '20px'
    },
    typo: {
        // color:'black'
        marginLeft: '15px',
        marginRight: '15px'
    },
    listfriend: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',

    }
}

const data = [
    { name: 'TTNM0' },
    { name: 'TTNM1' },
    { name: 'TTNM2' },
    { name: 'TTNM3' },
    { name: 'TTNM4' },
    { name: 'TTNM5' },
    { name: 'TTNM6' }
]





export default function LeftBar() {



    return (
        <Box sx={{ backgroundColor: 'white' }}>
            <DialogTitle>
                List classes
                <Button>
                    <SearchIcon />
                </Button>
            </DialogTitle>
            <DialogContent >
                <ScrollBox hide={false} sx={{ maxHeight: 250 }}>

                    {
                        data.map((e) => {
                            return (
                                <>

                                    <Button
                                        // underline='none'
                                        href='http://localhost:3000/class'
                                        // component='button'
                                        sx={style.button}>
                                        <ClassOutlinedIcon />
                                        <Typography sx={style.type}>
                                            {e.name}
                                        </Typography>
                                        <VideoCallOutlinedIcon sx={{ color: 'red' }} />
                                    </Button>
                                </>
                            )
                        })
                    }
                </ScrollBox>
            </DialogContent>
            < div style={{
                border: '1px black solid'
            }}>
            </div>
            <DialogTitle sx={style.listfriend}>
                List friends

                <Button>
                    <SearchIcon />
                </Button>
            </DialogTitle>
            <DialogContent >
                <ScrollBox hide={false} sx={{ maxHeight: 250 }}>
                    {
                        [...new Array(100)].map(() => {
                            return (
                                <>
                                    <Button /*</>href='http://localhost:3000/persion' */
                                        onClick={() => {
                                            return (<>
                                                <Item>
                                                    <Chat />
                                                </Item>
                                            </>)
                                        }}


                                        sx={style.button}>
                                        <ClassOutlinedIcon />
                                        <Typography sx={style.type}>
                                            List Friends
                                        </Typography>
                                        <NotificationsIcon sx={{ color: 'red' }} />
                                    </Button>
                                </>
                            )
                        })
                    }
                </ScrollBox>
            </DialogContent>
        </Box>

    )
}
