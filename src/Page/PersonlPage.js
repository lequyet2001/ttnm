// import { Avatar, Box, Button, IconButton, Typography } from '@mui/material'
import React from 'react'
import NavBar, { Item } from '../component/NavBar'
// import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import ScrollBox from '../component/ScrollBox';
import CoverImageAndAvata from '../component/CoverImageAndAvata';
import { Box, Grid } from '@mui/material';
import LeftBar from '../component/LeftBar';
import Status from '../component/Status';

export default function PersionlPage() {

    

    return (
        <Box >
            <Box sx={{ paddingBottom: '10px' }}>
                <NavBar />

            </Box>
            <ScrollBox sx={{ maxHeight: 700 }}>
                <CoverImageAndAvata />
                <Box padding={4}>

                </Box>
                <Box sx={{ width: '90%', pl: '5%' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Item>
                                <LeftBar />
                            </Item>
                        </Grid>
                        <Grid item xs={6}>

                            <ScrollBox hide={true} sx={{
                                maxHeight: 680,
                                width: '150%'
                                // backgroundColor: 'pink'
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: ' column',
                                    flexWrap: 'wrap',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Box sx={{ paddingBottom: '10px' }}>

                                        <Item>
                                            {/* <NewStatus /> */}
                                        </Item>
                                    </Box>
                                    {[...new Array(5)].map(() => {
                                        return (<>
                                            <Item>
                                                <Status />
                                            </Item>
                                        </>)
                                    })}
                                </Box>
                            </ScrollBox>
                        </Grid>
                    </Grid>
                </Box>
            </ScrollBox>
           
        </Box>
    )
}
