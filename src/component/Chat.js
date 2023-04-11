import { Avatar, Box, Grid, Link, Typography, IconButton, InputBase } from '@mui/material'
import React from 'react'

// import { Item } from './NavBar'
import SendIcon from '@mui/icons-material/Send';



export default function Chat({isHidden,index}) {

    return (
        <>
            <Box  sx={{
                // height: '353px',
                width: '250px',
                borderRadius: '10px 10px 0px 0px ',
                // backgroundColor: 'green',
                border: '1px black ouset',
                display: isHidden ? 'none' : 'block',
                position: 'absolute',
                top: '440px',
                left: `${1250-250*index -5*index}px`,
                // width: '200px',
                // height: '200px',
                backgroundColor: 'grey',
                color: 'white',
                // paddingLeft: '5px',
                zIndex:'999999',
                // border:'1px solid grey'
            }}>
                <Grid container >
                    <Grid item xs={12} sx={{
                        borderRadius: ' 10px 10px 0px 0px',
                        backgroundColor: 'blue',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        paddingLeft: '10px',
                        border: '1px black ouset',
                        // marginBotton:'20px'
                    }}>

                        <Avatar >Q</Avatar>
                        <Box >
                            <Typography variant='a' color='black'>
                                <Link href='/persion' color='black' sx={{ marginLeft: '10px' }}
                                    underline='hover' src='/persion'>Tiến dũng</Link>
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item xs={12}
                        sx={{
                            // borderRadius: ' 0px 0px 0px 0px',
                            // backgroundColor: 'red',
                            height: '250px',
                        }}

                    >as</Grid>
                    <Grid item xs={12}
                        sx={{
                            // borderRadius: ' 0px 0px 10px 10px',
                            // backgroundColor: '#ffff01',
                            height: '50px',
                            border: '1px solid black'
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>

                            <InputBase sx={{ ml: 1, flex: 1 }} />
                            <IconButton color="primary">
                                <SendIcon color='blue' />
                            </IconButton>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}
