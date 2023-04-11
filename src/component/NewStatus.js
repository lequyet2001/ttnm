import { Avatar, Grid, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CustomTextField from './CustomTextField'
// import { Item } from './NavBar'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';




export default function NewStatus() {
    return (
        <>
            <Box sx={{
                paddingTop: '10px',
                backgroundColor: 'white',
                height: 'auto',
                width: '1000px',
            }}>
                <Grid container >
                    <Grid item xs={12}>
                        <Box sx={{
                            display: 'flex',
                            padding: '10px'
                        }}>
                            <Box sx={{ paddingRight: '10px' }}>

                                <Avatar sx={{ width: 55, height: 55 }}>K</Avatar>
                            </Box>
                            <CustomTextField id="fullWidth" variant="outlined" fullWidth label="Kiên, bạn đang nghĩ gì thế?" />
                        </Box>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ border: '1px black solid' }} />
                    </Grid>
                    <Grid item xs={12}>
                        <List>
                            <ListItem>
                                <ListItemButton >              
                                        <CameraAltIcon sx={{ paddingRight: '10px' }} />
                                        <ListItemText primary="Camera" />                            
                                </ListItemButton>
                                <ListItemButton>
                                    <AddPhotoAlternateIcon sx={{ paddingRight: '10px' }} />
                                    <ListItemText primary="Photo" />
                                </ListItemButton>
                                <ListItemButton>
                                    <AttachFileIcon sx={{ paddingRight: '10px' }} />
                                    <ListItemText primary="File" />
                                </ListItemButton>
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}
