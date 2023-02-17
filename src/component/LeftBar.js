import { Box, Button, DialogContent, DialogTitle, Typography,Link } from '@mui/material'
import { React, } from 'react'
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ScrollBox from './ScrollBox';



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
                        [...new Array(10)].map(() => {
                            return (
                                <>
                                    
                                    <Button 
                                    // underline='none'
                                    href='https://mui.com/material-ui/react-link/'
                                    // component='button'
                                     sx={style.button}>
                                        <ClassOutlinedIcon />
                                        <Typography sx={style.type}>
                                            List Class
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
                                    <Button sx={style.button}>
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
