import { Box, Button, ButtonGroup, Grid, IconButton, Tab, Tabs, Typography } from '@mui/material'
import React, { useState } from 'react'
import NavBar, { Item } from '../component/NavBar'
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



    return (
        <>
            <Box>
                <Grid container >
                    <Grid item xs={12} sx={{ marginBotton: '10px' }} >
                        <Box sx={{ paddingBottom: '10px' }} >
                            <Item>
                                <NavBar />
                            </Item>
                        </Box>
                    </Grid>
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

                                            borderRight: '2px solid black',
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
                                        }}>
                                            
                                            <ChatBubbleOutlineIcon />
                                        </Tab>
                                        <Tab {...a11yProps(1)} sx={{
                                            '&:hover': {
                                                backgroundColor: 'grey',
                                                color: 'white'
                                            }
                                        }}>
                                            {/* <ChatBubbleOutlineIcon color='black' /> */}
                                            asdsa
                                        </Tab>
                                    </Tabs>
                                    <Button title='Chat' sx={styles.button2}>
                                        <ChatBubbleOutlineIcon />
                                    </Button>
                                    <Button title='Chat' sx={styles.button2}>
                                        <ChatBubbleOutlineIcon />
                                    </Button>
                                    <Button title='Chat' sx={styles.button2}>
                                        <ChatBubbleOutlineIcon />
                                    </Button>
                                </Box>
                            </Item>
                        </Box>
                    </Grid>
                    <Grid item xs={value === 3 ? 12 : 10}>
                        <Item>
                            <Box sx={{ height:'700px'}}>

                            </Box>
                        </Item>
                    </Grid>
                    <Grid item xs={2} sx={{ display: value===3?'none':'' }}>
                        <Item>

                            <TabPanel value={0} index={0} >
                                <Button  onClick={()=>{ setValue(3)}} >
                                    asdsa
                                    <PhoneDisabledIcon  />
                                </Button>
                            </TabPanel>
                            <TabPanel value={1} index={1}>
                                asdas
                            </TabPanel>

                        </Item>
                    </Grid>


                </Grid >

            </Box >
        </>
    )
}
