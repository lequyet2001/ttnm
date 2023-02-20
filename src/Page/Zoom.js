import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, InputBase, Tab, Tabs } from '@mui/material'
import React, { useState } from 'react'
import  { Item } from '../component/NavBar'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import GroupIcon from '@mui/icons-material/Group';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import PhoneDisabledIcon from '@mui/icons-material/PhoneDisabled';
import MicOffIcon from '@mui/icons-material/MicOff';
import MicNoneIcon from '@mui/icons-material/MicNone';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import PresentToAllIcon from '@mui/icons-material/PresentToAll';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { TabPanel } from '../component/MainPageClass';
import { a11yProps } from '../component/LeftBarPageClass';
import ScrollBox from '../component/ScrollBox';
import SendIcon from '@mui/icons-material/Send';





const styles = {
    button: {
        marginRight: '50px',
        '&:hover': {
            color: 'blue'
        },
        color: 'black'
    },
    button2: {
        color: 'black',
        '&:hover': {
            color: 'blue'
        },
    }
}




export default function Zoom() {

    const [value, setValue] = useState(3)
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)
    const [mic, setMic] = useState(0)
    const [share, setShare] = useState(0)
    const [vol, setVol] = useState(0)
    const [cam, setCam] = useState(0)
    const [like, setLike] = useState(false)
    const [likeDown, setLikeDown] = useState(false)
    const [open, setOpen] = useState(false)

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
      };

    return (
        <>
            <Box>
                <Grid container >

                    <Grid item xs={12}>
                        <Box sx={{ paddingBottom: '10px' }} >
                            <Item>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                    alignItems: 'center',

                                }}>

                                    <Tabs
                                        value={value}
                                        onChange={(a, b) => { setValue(b) }}
                                        sx={{
                                            // borderRight: '2px solid black',
                                            marginRight: '50px',
                                            // borderRadius: '10px'
                                        }}
                                        variant="scrollable"
                                        scrollButtons={true}
                                    // aria-label="scrollable prevent tabs example"
                                    >
                                        <Tab {...a11yProps(0)} sx={{
                                            '&:hover': {
                                                backgroundColor: 'grey',
                                                color: 'white'
                                            }
                                        }}
                                            label={<ChatBubbleOutlineIcon />}
                                            title='Chat'
                                            onClick={() => {
                                                if (count === 1) {
                                                    setCount(0)
                                                    setValue(3)
                                                    setCount2(0)
                                                }
                                                else {
                                                    setCount(count + 1)
                                                    setCount2(0)
                                                }
                                            }}
                                        />
                                        <Tab {...a11yProps(1)} sx={{
                                            '&:hover': {
                                                backgroundColor: 'grey',
                                                color: 'white'
                                            }
                                        }}
                                            label={<GroupIcon />}
                                            title='People'
                                            onClick={() => {
                                                if (count2 === 1) {
                                                    setCount2(0)
                                                    setValue(3)
                                                    setCount(0)
                                                }
                                                else {
                                                    setCount2(count2 + 1)
                                                    setCount(0)
                                                }
                                            }}
                                        />
                                    </Tabs>
                                    <Button onClick={() => {
                                        if (!like) {
                                            setLike(true)
                                            setLikeDown(false)

                                        }
                                        else setLike(false)
                                    }}
                                        sx={{
                                            color: like ? '' : 'black'
                                        }}

                                    >
                                        <ThumbUpIcon />
                                    </Button>
                                    <Button onClick={() => {
                                        if (!likeDown) {
                                            setLikeDown(true)
                                            setLike(false)
                                        } else setLikeDown(false)
                                    }} sx={{
                                        color: likeDown ? '' : 'black'
                                    }}>
                                        <ThumbDownIcon />
                                    </Button>
                                    <Button title='Screen sharing' sx={styles.button2} onClick={() => { share === 1 ? setShare(share - 1) : setShare(share + 1) }} >
                                        {
                                            share === 0 ? <PresentToAllIcon /> : <CancelPresentationIcon />
                                        }
                                    </Button>
                                    <Button title='Mic' sx={styles.button2} onClick={() => { mic === 1 ? setMic(mic - 1) : setMic(mic + 1) }} >
                                        {
                                            mic === 0 ? <MicNoneIcon /> : <MicOffIcon />
                                        }

                                    </Button>
                                    <Button title='Volume' sx={styles.button2} onClick={() => { vol === 1 ? setVol(vol - 1) : setVol(vol + 1) }}  >
                                        {
                                            vol === 0 ? <VolumeUpIcon /> : <VolumeMuteIcon />
                                        }
                                    </Button>
                                    <Button title='Volume' onClick={() => { cam === 1 ? setCam(cam - 1) : setCam(cam + 1) }} sx={styles.button2}>
                                        {
                                            cam === 0 ? <VideocamIcon /> : <VideocamOffIcon />
                                        }
                                    </Button>
                                    <Button title='Thoát cuộc họp' sx={
                                        { color: 'red' }
                                    }
                                        onClick={handleClickOpen}
                                    >
                                        <PhoneDisabledIcon />
                                    </Button>
                                </Box>
                            </Item>
                        </Box>
                    </Grid>
                    <Grid item xs={value === 3 ? 12 : 9}>
                        <Item>
                            <Box sx={{ height: '680px', backgroundColor: 'black' }} />
                        </Item>
                    </Grid>
                    <Grid item xs={value === 3 ? 0 : 3} sx={{ display: value === 3 ? 'none' : '' }}>
                        <TabPanel value={value} index={0} >
                            <Item sx={{ backgroundColor: 'grey' }}>
                                <Box sx={{ height: '590px' }}>
                                    <ScrollBox>
                                        {
                                            [...new Array(10)].map(() => {
                                                return <>
                                                    <Box>

                                                    </Box>
                                                </>
                                            })
                                        }
                                    </ScrollBox>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '4px',
                                    '&:hover': {
                                        border: '1px solid black'
                                    }
                                }}>
                                    <InputBase />
                                    <Button>
                                        <SendIcon />
                                    </Button>
                                </Box>
                            </Item>
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <Item sx={{ backgroundColor: 'grey' }}>
                                <Box sx={{ height: '630px' }}>
                                    <ScrollBox>
                                        {
                                            [...new Array(10)].map(() => {
                                                return <>
                                                    <Box>

                                                    </Box>

                                                </>
                                            })
                                        }
                                    </ScrollBox>
                                </Box>
                                <Box sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: '4px',
                                    '&:hover': {
                                        border: '1px solid black'
                                    }
                                }}>

                                </Box>
                            </Item>
                        </TabPanel>
                    </Grid>
                </Grid >
            </Box >
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Thoát khỏi phòng họp
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Bạn có chắc muốn thoát phòng họp
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Disagree</Button>
                    <Button onClick={handleClose} href='http://localhost:3000/class' autoFocus>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
