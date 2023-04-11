import { Box, Button, DialogContent, DialogTitle, Typography, IconButton, Link } from '@mui/material'
import { React, useState, } from 'react'
import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ScrollBox from './ScrollBox';
import Chat from './Chat';
// import { Item } from './NavBar';



const style = {
    button: {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        color: 'black',
        borderRadius: '10px',
        '&:hover': {
            backgroundColor: '#2e89ff ',
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

    const [isHidden, setIsHidden] = useState(true);
    const [isHidden1, setIsHidden1] = useState(true);
    const [isHidden2, setIsHidden2] = useState(true);
    const [isHidden3, setIsHidden3] = useState(true);



    const toggleHidden = () => {
        setIsHidden(!isHidden);
    };
    const toggleHidden1 = () => {
        setIsHidden1(!isHidden1);
    };

    const toggleHidden2 = () => {
        setIsHidden2(!isHidden2);
    };

    const toggleHidden3 = () => {
        setIsHidden3(!isHidden3);
    };

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
                        data.map((e,index) => {
                            return (
                                <>
                                    <Box sx={{display:'flex', flexDirection:'row',alignItems:'center', justifyContent:'flex-start'}}>
                                        <Link  href='/class'>
                                        <Button
                                            // underline='none'
                                           
                                            // component='button'
                                            sx={style.button}>
                                            <ClassOutlinedIcon />
                                            <Typography sx={style.typo}>
                                                {e.name}
                                            </Typography>
                                        </Button>
                                                </Link>
                                        <Link href='/zoom' >
                                        <IconButton href='' sx={{top:'-10px','&:hover':{color:'#2e89ff'}}}>
                                            <VideoCallOutlinedIcon sx={{ color: 'red' }} />
                                        </IconButton>
                                        </Link>
                                    </Box>
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
                    <Button
                        onClick={toggleHidden}
                        sx={style.button}>
                        <ClassOutlinedIcon />
                        <Typography sx={style.type}>
                            Bạn Bè 0
                        </Typography>
                        <NotificationsIcon sx={{ color: 'red' }} />
                    </Button>
                    <Button
                        onClick={toggleHidden1}
                        sx={style.button}>
                        <ClassOutlinedIcon />
                        <Typography sx={style.type}>
                            Bạn Bè 1
                        </Typography>
                        <NotificationsIcon sx={{ color: 'red' }} />
                    </Button>
                    <Button
                        onClick={toggleHidden2}
                        sx={style.button}>
                        <ClassOutlinedIcon />
                        <Typography sx={style.type}>
                            Bạn Bè 2
                        </Typography>
                        <NotificationsIcon sx={{ color: 'red' }} />
                    </Button>
                    <Button
                        onClick={toggleHidden3}
                        sx={style.button}>
                        <ClassOutlinedIcon />
                        <Typography sx={style.type}>
                            Bạn bè 3
                        </Typography>
                        <NotificationsIcon sx={{ color: 'red' }} />
                    </Button>
                    <Button
                        // onClick={}
                        sx={style.button}>
                        <ClassOutlinedIcon />
                        <Typography sx={style.type}>
                            Bạn Bè 4
                        </Typography>
                        <NotificationsIcon sx={{ color: 'red' }} />
                    </Button>
                    <Button
                        // onClick={}
                        sx={style.button}>
                        <ClassOutlinedIcon />
                        <Typography sx={style.type}>
                            Bạn Bè 5
                        </Typography>
                        <NotificationsIcon sx={{ color: 'red' }} />
                    </Button>
                    <Button
                        // onClick={}
                        sx={style.button}>
                        <ClassOutlinedIcon />
                        <Typography sx={style.type}>
                            Bạn Bè 6
                        </Typography>
                        <NotificationsIcon sx={{ color: 'red' }} />
                    </Button>
                    <Button
                        // onClick={}
                        sx={style.button}>
                        <ClassOutlinedIcon />
                        <Typography sx={style.type}>
                            Bạn Bè 7
                        </Typography>
                        <NotificationsIcon sx={{ color: 'red' }} />
                    </Button>

                </ScrollBox>
            </DialogContent>


            <Chat isHidden={isHidden}  index={0} />
            <Chat isHidden={isHidden1} index={1} />
            <Chat isHidden={isHidden2} index={2} />
            <Chat isHidden={isHidden3} index={3} />

        </Box>

    )
}
