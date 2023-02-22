import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material'
import React, { useState } from 'react'
import ScrollBox from './ScrollBox'
// import { Item } from './NavBar'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { a11yProps } from './LeftBarPageClass';
// import Box from '@mui/material/Box';
import VideocamIcon from '@mui/icons-material/Videocam';



export function TabPanel(props) {
    const { children, value, index, ...other } = props;




    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};


export default function MainPageClass(props) {


    const [open,setOpen]=useState(false)

    const data = [
        { title: 'Trang chủ' },
        { title: 'Bài Tập' },
        { title: 'Tài Liệu' },
        { title: 'Danh gia' }

    ]

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
      };

    return (
        <Box>
            <ScrollBox sx={{ height: '650px' }}>
                {[...new Array(10)].map((e, e2) => {
                    return (<>
                        <TabPanel value={props.value} index={e2}>

                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons={false}
                                aria-label="scrollable prevent tabs example"
                                sx={{}}
                            >
                                {
                                    data.map((e, index) => {
                                        return <Tab label={e.title}
                                                {...a11yProps(index)}
                                                sx={{
                                                    '&:hover': {
                                                        backgroundColor: 'grey',
                                                        color: 'white'
                                                    }
                                                }}
                                            />
                                    })
                                }
                                <Box >
                                    <Button  sx={{ left: '400px', color: 'black', '&:hover': { color: 'blue' } }}    onClick={handleClickOpen} >
                                        <Typography> Phòng họp</Typography>
                                        <VideocamIcon sx={{ marginLeft: '10px' }} />
                                    </Button>
                                </Box>
                            </Tabs>
                            <Box sx={{ border: '1px solid black', marginTop: '10px' }}></Box>
                            <TabPanel value={value} index={0}>
                                Trang chu {props.index}
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                Tai lieu {props.index}
                            </TabPanel>
                            <TabPanel value={value} index={2}>
                                Bai tap {props.index}
                            </TabPanel>
                            <TabPanel value={value} index={3}>
                                Danh gia {props.index}
                            </TabPanel>
                        </TabPanel>

                    </>)
                })}
            </ScrollBox>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Tạo cuộc họp
                </DialogTitle>
                <DialogContent sx={{display:'flex',flexDirection:'column', justifyContent:'flex-start'}}>
                    {/* <DialogContentText id="alert-dialog-description">
                        Bạn có muốn tạo cuộc họp?
                    </DialogContentText> */}
                    <Button onClick={handleClose}> Lên lịch cuộc họp</Button>
                    <Button onClick={handleClose} href='http://localhost:3000/zoom' autoFocus>
                        Tạo phòng họp
                    </Button>
                </DialogContent>
                <DialogActions>
                </DialogActions>
            </Dialog>
        </Box>
    )
}
